
import Button from "../../ui/Button.jsx";
import Label from "../../ui/Label.jsx";
import Select from "../../ui/Select.jsx";
import {useRecordData} from "../../../hooks/useRecordData.js";
import Loader from "../../ui/Loader.jsx";
import FormField from "../../ui/FormField.jsx";

const DoctorForm = ({onSuccess}) => {
    const { specializations, loading: dataLoading, error: dataError } = useRecordData();
    const { values, errors, loading, handleChange, handleSubmit } = useDoctorForm(onSuccess);

    if (dataLoading) return <Loader />;
    if (dataError) return <p className="text-red-500 text-sm">{dataError}</p>;


    if (dataLoading) return <Loader />;

    if (dataError) {
        return <p className="text-red-500 text-sm">{dataError}</p>;
    }
    return (
        <div className="w-full">
            <header className="border-b border-slate-300 pb-4 mb-6">
                <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
                    Регистрация специалиста
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                    Заполните карточку специалиста, чтобы он появился в списке доступных для
                    записи на прием нашим клиентам.
                </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <FormField id="fio" name="fio" label="ФИО" type="text"
                           autoFocus={true}
                           value={values.fio} onChange={handleChange}
                           error={errors.fio} placeholder="Введите ФИО специалиста.."/>

                <div>
                    <Label
                        htmlFor={"specialization"}>
                        Специализация
                    </Label>
                    <Select
                        id="specialization"
                        name="specialization_id"
                        value={values.specialization}
                        onChange={handleChange}>
                        <option value="" disabled>Выберите направление..</option>
                        {specializations.map((s) => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                    </Select>
                    {errors.specialization_id && (
                        <p className="text-red-500 text-xs mt-1">{errors.specialization_id}</p>
                    )}
                </div>

                {errors._global && (
                    <p className="text-red-500 text-sm">{errors._global}</p>
                )}
                <Button type="submit" disabled={loading}>
                    {loading ? "Сохранение..." : "Зарегистрировать"}
                </Button>
            </form>
        </div>
    );
};

export default DoctorForm;
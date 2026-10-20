import { useEffect } from "react";
import { Link } from "react-router-dom";
import Label from "../ui/Label.jsx";
import Select from "../ui/Select.jsx";
import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";
import Loader from "../ui/Loader.jsx";
import SlotPicker from "../ui/SlotPicker.jsx";
import { useRecordForm } from "../../hooks/useRecordForm.js";
import { useRecordData } from "../../hooks/useRecordData.js";
import { useDoctors } from "../../hooks/useDoctors.js";
import { useSlots } from "../../hooks/useSlots.js";

const RecordForm = ({ onSuccess }) => {
    const { specializations, pets, loading: dataLoading, error: dataError } = useRecordData();
    const { values, errors, loading, handleChange, handleSubmit, setValue } = useRecordForm(onSuccess);

    const { doctors, loading: doctorsLoading } = useDoctors(values.specialization);
    const { slots, loading: slotsLoading } = useSlots(values.doctor, values.date);


    useEffect(() => {
        setValue("doctor", "");
        setValue("slot", "");
    }, [values.specialization, setValue]);

    useEffect(() => {
        setValue("slot", "");
    }, [values.date, setValue]);

    if (dataLoading) return <Loader />;

    if (dataError) {
        return <p className="text-danger text-sm">{dataError}</p>;
    }

    const hasPets = pets.length > 0;

    return (
        <div className="w-full">
            <header className="border-b border-ink pb-4 mb-6">
                <p className="text-[10px] tracking-[0.2em] text-ink/80 uppercase mb-2">
                    Заявка
                </p>
                <p className="text-sm leading-relaxed">
                    Заполните заявку на приём, чтобы мы могли подтвердить вашу запись.
                </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                    <Label htmlFor="specialization">Направление</Label>
                    <Select
                        id="specialization"
                        name="specialization"
                        value={values.specialization}
                        onChange={handleChange}>
                        <option value="" disabled>Выберите направление..</option>
                        {specializations.map((s) => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                    </Select>
                    {errors.specialization && (
                        <p className="text-danger text-xs mt-1">{errors.specialization}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="doctor">Врач</Label>
                    <Select
                        id="doctor"
                        name="doctor"
                        value={values.doctor}
                        onChange={handleChange}
                        disabled={!values.specialization || doctorsLoading}>
                        <option value="" disabled>
                            {doctorsLoading
                                ? "Загрузка..."
                                : !values.specialization
                                    ? "Сначала выберите направление"
                                    : "Выберите врача.."}
                        </option>
                        {doctors.map((d) => (
                            <option key={d.id} value={d.id}>{d.fio}</option>
                        ))}
                    </Select>
                    {errors.doctor && (
                        <p className="text-danger text-xs mt-1">{errors.doctor}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="date">Дата приёма</Label>
                    <Input
                        type="date"
                        id="date"
                        name="date"
                        value={values.date}
                        onChange={handleChange}
                        disabled={!values.doctor}
                        error={errors.date}
                        className="disabled:opacity-50"
                    />
                    {errors.date && (
                        <p className="text-danger text-xs mt-1">{errors.date}</p>
                    )}
                </div>

                <div>
                    <Label>Время приёма</Label>
                    <SlotPicker
                        slots={slots}
                        value={values.slot}
                        onChange={(slot) => setValue("slot", slot)}
                        loading={slotsLoading}
                        error={errors.slot}
                    />
                    {errors.slot && (
                        <p className="text-danger text-xs mt-1">{errors.slot}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="pet">Питомец</Label>
                    <Select
                        id="pet"
                        name="pet"
                        value={values.pet}
                        onChange={handleChange}>
                        <option value="" disabled>
                            {hasPets ? "Выберите питомца.." : "У вас пока нет питомцев"}
                        </option>
                        {pets.map((pet) => (
                            <option key={pet.id} value={pet.id}>{pet.name}</option>
                        ))}
                    </Select>
                    {errors.pet && (
                        <p className="text-danger text-xs mt-1">{errors.pet}</p>
                    )}
                    {!hasPets && (
                        <p className="text-sm text-slate-600 mt-2">
                            <Link
                                className="underline  hover:text-accent transition"
                                to="/pet/add">
                                Регистрация питомца
                            </Link>
                        </p>
                    )}
                </div>

                {errors._global && (
                    <p className="text-red-500 text-sm">{errors._global}</p>
                )}

                <Button type="submit" disabled={loading || !hasPets}>
                    {loading ? "Отправка..." : "Записаться"}
                </Button>
            </form>
        </div>
    );
};

export default RecordForm;
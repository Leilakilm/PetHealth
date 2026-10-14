import { Link } from "react-router-dom";
import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";
import Loader from "../ui/Loader.jsx";
import { useRecordForm } from "../../hooks/useRecordForm.js";
import { useRecordData } from "../../hooks/useRecordData.js";

const fieldClass = (error) => `
  w-full py-2.5 px-3 bg-transparent
  border border-slate-300
  focus:outline-none focus:border-orange-600
  text-sm focus:text-orange-600 text-slate-800
  transition
  ${error ? "border-red-500" : ""}
`;

const RecordForm = ({ onSuccess }) => {
    const { specializations, pets, loading: dataLoading, error: dataError } = useRecordData();
    const { values, errors, loading, handleChange, handleSubmit } = useRecordForm(onSuccess);

    if (dataLoading) return <Loader />;

    if (dataError) {
        return <p className="text-red-500 text-sm">{dataError}</p>;
    }

    const hasPets = pets.length > 0;

    return (
        <div className="w-full">
            <header className="border-b border-slate-300 pb-4 mb-6">
                <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
                    Заявка
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                    Заполните заявку на приём, чтобы мы могли подтвердить вашу запись.
                </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                    <label
                        htmlFor="specialization"
                        className="block text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
                        Направление
                    </label>
                    <select
                        id="specialization"
                        name="specialization"
                        value={values.specialization}
                        onChange={handleChange}
                        className={fieldClass(errors.specialization)}>
                        <option value="" disabled>
                            Выберите направление..
                        </option>
                        {specializations.map((s) => (
                            <option key={s.id} value={s.id}>
                                {s.name}
                            </option>
                        ))}
                    </select>
                    {errors.specialization && (
                        <p className="text-red-500 text-xs mt-1">{errors.specialization}</p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="pet"
                        className="block text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
                        Питомец
                    </label>
                    <select
                        id="pet"
                        name="pet"
                        value={values.pet}
                        onChange={handleChange}
                        className={fieldClass(errors.pet)}>
                        <option value="" disabled>
                            {hasPets
                                ? "Выберите питомца.."
                                : "У вас пока нет зарегистрированных питомцев"}
                        </option>
                        {pets.map((pet) => (
                            <option key={pet.id} value={pet.id}>
                                {pet.name}
                            </option>
                        ))}
                    </select>
                    {errors.pet && (
                        <p className="text-red-500 text-xs mt-1">{errors.pet}</p>
                    )}
                    {!hasPets && (
                        <p className="text-sm text-slate-600 mt-2">
                            <Link
                                className="underline text-slate-800 hover:text-orange-600 transition"
                                to="/pet/add">
                                Регистрация питомца
                            </Link>
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="date"
                        className="block text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
                        Желаемое время приёма
                    </label>
                    <Input
                        type="date"
                        id="date"
                        name="date"
                        value={values.date}
                        onChange={handleChange}
                        error={errors.date}
                        required
                        className="bg-transparent px-3 py-2.5 border border-slate-300  text-sm"
                    />
                    {errors.date && (
                        <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                    )}
                </div>

                {errors._global && (
                    <p className="text-red-500 text-sm">{errors._global}</p>
                )}
                <Button type="submit" disabled={loading}>
                    {loading ? "Отправка..." : "Записаться"}
                </Button>
            </form>
        </div>
    );
};

export default RecordForm;
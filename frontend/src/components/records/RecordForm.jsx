import { Link } from "react-router-dom";
import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";
import Loader from "../ui/Loader.jsx";
import { useRecordForm } from "../../hooks/useRecordForm.js";
import { useRecordData } from "../../hooks/useRecordData.js";

const selectClass = (error) => `
  focus:text-orange-600 w-full py-2.5 border transition
  focus:outline-none focus:border-b-orange-600
  border-slate-200 border-b-slate-300 focus:border-transparent
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
            <h5 className="mb-4 text-sm w-full md:w-2/3 font-medium text-slate-500">
                Заполните заявку на приём, чтобы мы могли подтвердить вашу запись.
            </h5>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                    <label
                        htmlFor="specialization"
                        className="block text-sm font-medium text-slate-800 mb-1"
                    >
                        Направление
                    </label>
                    <select
                        id="specialization"
                        name="specialization"
                        value={values.specialization}
                        onChange={handleChange}
                        className={selectClass(errors.specialization)}
                    >
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
                    <label htmlFor="pet" className="block text-sm font-medium text-slate-800 mb-1">
                        Питомец
                    </label>
                    <select
                        id="pet"
                        name="pet"
                        value={values.pet}
                        onChange={handleChange}
                        className={selectClass(errors.pet)}
                    >
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
                        <p className="text-slate-500 text-sm mt-1">
                            <Link className="text-orange-600 underline" to="/pet/add">
                                Регистрация питомца
                            </Link>
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-slate-800 mb-1">
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
                    />
                    {errors.date && (
                        <p className="text-red-500 text-xs mt-1">{errors.date}</p>
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
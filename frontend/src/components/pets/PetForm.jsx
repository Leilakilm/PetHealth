import FormField from "../ui/FormField.jsx";
import Button from "../ui/Button.jsx";
import { petFields } from "../../constants/petFields.js";
import { usePetForm } from "../../hooks/usePetForm.js";

const PetForm = ({ onSuccess }) => {
    const { values, errors, loading, handleChange, handleSubmit } =
        usePetForm(onSuccess);

    return (
        <div className="w-full">
            <h5 className="mb-4 text-sm w-full md:w-2/3 font-medium text-slate-500">
                Заполните карточку питомца, чтобы он появился в списке доступных для
                записи на приём.
            </h5>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {petFields.map((field) => (
                    <FormField
                        key={field.name}
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        label={field.label}
                        placeholder={field.placeholder}
                        value={values[field.name] ?? ""}
                        onChange={handleChange}
                        error={errors[field.name]}
                        required={field.required}
                        autoFocus={field.autoFocus}
                    />
                ))}

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

export default PetForm;
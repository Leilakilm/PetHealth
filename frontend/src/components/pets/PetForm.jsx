import FormField from "../ui/FormField.jsx";
import Button from "../ui/Button.jsx";
import {usePetForm} from "../../hooks/usePetForm.js";

const PetForm = ({onSuccess}) => {
    const {values, errors, loading, handleChange, handleSubmit} =
        usePetForm(onSuccess);

    return (
        <div className="w-full">
            <header className="border-b pb-4 mb-6">
                <p className="text-[10px] tracking-[0.2em] uppercase text-ink/80 mb-2">
                    Регистрация питомца
                </p>
                <p className="text-sm leading-relaxed">
                    Заполните карточку питомца, чтобы он появился в списке доступных для
                    записи на приём.
                </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <FormField id="name" name="name" label="Имя" type="text"
                           autoFocus={true}
                           value={values.name} onChange={handleChange}
                           error={errors.name} placeholder="Введите имя питомца.."/>

                <FormField id="species" name="species" label="Вид" type="text"
                           value={values.species} onChange={handleChange}
                           error={errors.species} placeholder="Введите вид питомца.."/>

                <FormField id="age" name="age" label="Возраст" type="number"
                           value={values.age} onChange={handleChange}
                           error={errors.age} placeholder="Введите возраст питомца.."/>
                {errors._global && (
                    <p className="text-danger text-sm">{errors._global}</p>
                )}

                <Button type="submit" disabled={loading}>
                    {loading ? "Сохранение..." : "Зарегистрировать"}
                </Button>
            </form>
        </div>
    );
};

export default PetForm;
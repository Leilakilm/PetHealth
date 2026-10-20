import FormField from "../ui/FormField.jsx";
import Button from "../ui/Button.jsx";
import {useRegistrationForm} from "../../hooks/useRegistrationForm.js";

const RegistrationForm = ({onSuccess}) => {
    const {values, errors, loading, handleChange, handleSubmit} = useRegistrationForm(onSuccess);

    return (
        <div className="w-full">
            <header className="border-b pb-4 mb-6">
                <p className="text-[10px] tracking-[0.2em] text-ink/80 uppercase mb-2">
                    Форма регистрация
                </p>
                <p className="text-sm leading-relaxed">
                    Заполните форму, чтобы создать личный кабинет и записывать питомцев на приём.
                </p>
            </header>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <FormField id="name" name="name" label="Имя" type="text"
                           autoFocus={true}
                           value={values.name} onChange={handleChange}
                           error={errors.name} placeholder="Введите ваше имя.."/>

                <FormField id="email" name="email" label="Email" type="email"
                           value={values.email} onChange={handleChange}
                           error={errors.email} placeholder="Введите ваш email.."/>

                <FormField id="phone" name="phone" label="Телефон" type="text"
                           value={values.phone} onChange={handleChange}
                           error={errors.phone} placeholder="8(XXX)XXX-XX-XX"/>

                <FormField id="password" name="password" label="Пароль" type="password"
                           value={values.password} onChange={handleChange}
                           error={errors.password} placeholder="Введите пароль.."/>

                <FormField id="password_confirmation" name="password_confirmation"
                           label="Повторите пароль" type="password"
                           value={values.password_confirmation} onChange={handleChange}
                           error={errors.password_confirmation} placeholder="Введите пароль снова.."/>

                {errors._global && (
                    <p className="text-danger text-sm">{errors._global}</p>
                )}

                <Button type="submit" disabled={loading}>
                    {loading ? "Отправка..." : "Зарегистрироваться"}
                </Button>
            </form>
        </div>
    );
};
export default RegistrationForm;
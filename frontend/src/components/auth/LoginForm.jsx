import FormField from "../ui/FormField.jsx";
import Button from "../ui/Button.jsx";
import {useLoginForm} from "../../hooks/useLoginForm.js";

const LoginForm = ({onSuccess}) => {
    const {values, errors, loading, handleChange, handleSubmit} =
        useLoginForm(onSuccess);

    return (
        <div className="w-full">
            <header className="border-b border-slate-300 pb-4 mb-6">
                <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
                    Форма авторизации
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                    Войдите в личный кабинет, чтобы записывать питомцев на приём и управлять
                    своими записями.
                </p>
            </header>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <FormField id="email" name="email" label="Email" type="email"
                           autoFocus={true}
                           value={values.email} onChange={handleChange}
                           error={errors.email} placeholder="Введите ваш email.."/>

                <FormField id="password" name="password" label="Пароль" type="password"
                           value={values.password} onChange={handleChange}
                           error={errors.password} placeholder="Введите пароль.."/>
                {errors._global && (
                    <p className="text-red-500 text-sm">{errors._global}</p>
                )}

                <Button type="submit" disabled={loading}>
                    {loading ? "Вход..." : "Авторизоваться"}
                </Button>
            </form>
        </div>
    );
};

export default LoginForm;
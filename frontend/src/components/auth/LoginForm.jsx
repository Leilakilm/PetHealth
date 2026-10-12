import FormField from "../ui/FormField.jsx";
import Button from "../ui/Button.jsx";
import { loginFields } from "../../constants/loginFields.js";
import { useLoginForm } from "../../hooks/useLoginForm.js";

const LoginForm = ({ onSuccess }) => {
    const { values, errors, loading, handleChange, handleSubmit } =
        useLoginForm(onSuccess);

    return (
        <div className="w-full">
            <h5 className="mb-4 text-sm md:w-2/3 font-medium text-slate-500">
                Войдите в личный кабинет, чтобы записывать питомцев на приём и управлять
                своими записями.
            </h5>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {loginFields.map((field) => (
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
                    />
                ))}

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
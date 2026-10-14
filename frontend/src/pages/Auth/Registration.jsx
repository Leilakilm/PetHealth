import RegistrationIntro from "../../components/auth/RegistrationIntro.jsx";
import RegistrationForm from "../../components/auth/RegistrationForm.jsx";

const Registration = () => {
    const handleRegister = async (values) => {
        console.log(values);
    };

    return (
        <section className="grid grid-cols-1 md:grid-cols-2">
            <RegistrationIntro/>
            <div>
                <header className="border-b border-slate-300 pb-4 mb-6">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
                        Форма регистрация
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Заполните форму, чтобы создать личный кабинет и записывать питомцев на приём.
                    </p>
                </header>
                <RegistrationForm onSubmit={handleRegister}/>
            </div>
        </section>
    );
};
export default Registration;
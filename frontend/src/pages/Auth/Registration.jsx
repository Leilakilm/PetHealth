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
                <h5 className="mb-4 block text-sm w-full md:w-2/3 font-medium text-slate-500">
                    Заполните форму, чтобы создать личный кабинет и записывать питомцев на приём.
                </h5>
                <RegistrationForm onSubmit={handleRegister}/>
            </div>
        </section>
    );
};
export default Registration;
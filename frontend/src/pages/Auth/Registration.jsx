import RegistrationIntro from "../../components/auth/RegistrationIntro.jsx";
import RegistrationForm from "../../components/auth/RegistrationForm.jsx";

const Registration = () => {
    const handleRegister = async (values) => {
        console.log(values);
    };

    return (
        <section className="grid grid-cols-1 md:grid-cols-2">
            <RegistrationIntro/>
                <RegistrationForm onSubmit={handleRegister}/>
        </section>
    );
};
export default Registration;
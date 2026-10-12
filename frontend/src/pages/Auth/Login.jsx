import { useNavigate } from "react-router-dom";
import LoginIntro from "../../components/auth/LoginIntro.jsx";
import LoginForm from "../../components/auth/LoginForm.jsx";

const Login = () => {
    const navigate = useNavigate();

    const handleSuccess = () => {
        navigate("/");
    };

    return (
        <section className="grid grid-cols-1 md:grid-cols-2">
            <LoginIntro />
            <LoginForm onSuccess={handleSuccess} />
        </section>
    );
};

export default Login;
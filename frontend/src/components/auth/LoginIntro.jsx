import {Link} from "react-router-dom";

const LoginIntro = () => (
    <div>
        <h3 className="mb-4 text-3xl font-bold text-slate-800">Вход</h3>
        <p className="mt-2 text-sm md:w-2/3 font-medium text-slate-500 mb-2">
            На этой странице вы входите в личный кабинет, чтобы управлять питомцами и
            записями. Введите email и пароль, указанные при регистрации, и вы получите
            доступ к своим приёмам, истории визитов и данным питомцев. Если вы еще не зарегистрированы, создайте аккаунт
            по ссылке ниже — это займет меньше минуты.
        </p>
        <p className="text-slate-500">
            Еще нет аккаунта?{" "}
            <Link className="text-orange-600 underline" to="/registration">
                Регистрация
            </Link>
        </p>
    </div>
);

export default LoginIntro;
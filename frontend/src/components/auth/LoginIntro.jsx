import {Link} from "react-router-dom";

const LoginIntro = () => (
    <div>
        <header>
            <p className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2">
                Страница вторизации
            </p>
            <h2 className="font-accent font-bold text-5xl leading-tight">
                Вход<span className="text-accent">.</span>
            </h2>
        </header>
        <p className="w-full md:w-2/3 text-sm leading-relaxed my-2">
            На этой странице вы входите в личный кабинет, чтобы управлять питомцами и
            записями. Введите email и пароль, указанные при регистрации, и вы получите
            доступ к своим приемам, истории визитов и данным питомцев. Если вы еще не зарегистрированы, создайте аккаунт
            по ссылке ниже — это займет меньше минуты.
        </p>
        <p className="w-full md:w-2/3 text-sm leading-relaxed">
            Еще нет аккаунта?{" "}
            <Link className="text-accent underline" to="/registration">
                Регистрация
            </Link>
        </p>
    </div>
);

export default LoginIntro;
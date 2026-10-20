import {Link} from "react-router-dom";

const RegistrationIntro = () => (
    <div>
        <header>
            <p className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2">
                страница регистрации
            </p>
            <h2 className="font-accent font-bold text-5xl leading-tight">
                Регистрация<span className="text-accent">.</span>
            </h2>
        </header>
        <p className="w-full md:w-2/3 text-sm leading-relaxed my-2">
            На этой странице вы создаете личный кабинет, чтобы записывать питомцев
            к ветеринару онлайн. Укажите имя, email, телефон и придумайте пароль —
            это займет меньше минуты, а регистрация полностью бесплатна. После создания аккаунта вы сможете добавить
            питомцев, выбирать врача и направление, а также управлять своими записями.
        </p>
        <p className="w-full md:w-2/3 text-sm leading-relaxed">
            Уже есть аккаунт?{" "}
            <Link className="text-accent underline" to="/login">Вход</Link>
        </p>
    </div>
);
export default RegistrationIntro;
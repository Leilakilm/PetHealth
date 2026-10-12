import {Link} from "react-router-dom";

const RegistrationIntro = () => (
    <div>
        <h3 className="mb-4 text-3xl font-bold text-slate-800">Регистрация</h3>
        <p className="mt-2 text-sm md:w-2/3 font-medium text-slate-500 mb-2">
            На этой странице вы создаете личный кабинет, чтобы записывать питомцев
            к ветеринару онлайн. Укажите имя, email, телефон и придумайте пароль —
            это займет меньше минуты, а регистрация полностью бесплатна. После создания аккаунта вы сможете добавить
            питомцев, выбирать врача и направление, а также управлять своими записями.
        </p>
        <p className="mb-3 text-slate-500">
            Уже есть аккаунт?{" "}
            <Link className="text-orange-600 underline" to="/login">Вход</Link>
        </p>
    </div>
);
export default RegistrationIntro;
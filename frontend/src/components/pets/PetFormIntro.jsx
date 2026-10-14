import { Link } from "react-router-dom";

const PetFormIntro = () => (
    <div>
        <header>
            <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
                форма регистрации
            </p>
            <h2 className="font-serif text-5xl leading-tight text-slate-800">
                Регистрация питомца
            </h2>
        </header>
        <p className="w-full md:w-2/3 text-sm text-slate-600 leading-relaxed my-2">
            На этой странице вы добавляете нового питомца в личный кабинет владельца.
            Укажите имя, вид и возраст животного — эти данные помогут ветеринару
            подготовиться к приему и подобрать правильный подход. После сохранения
            питомец появится в вашем профиле, и его можно будет записать на прием к
            нужному специалисту. Изменить или дополнить информацию о питомце можно в
            любой момент в разделе управления питомцами.
        </p>
        <p className="w-full md:w-2/3 text-sm text-slate-600 leading-relaxed">
            Просмотреть{" "}
            <Link className="underline text-orange-600" to="/pets">
                список своих питомцев
            </Link>
            .
        </p>
    </div>
);

export default PetFormIntro;
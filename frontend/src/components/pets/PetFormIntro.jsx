import { Link } from "react-router-dom";

const PetFormIntro = () => (
    <div>
        <h3 className="mb-4 text-3xl font-bold m-0 text-slate-800">
            Регистрация питомца
        </h3>
        <p className="mt-2 text-sm w-full md:w-2/3 font-medium text-slate-500 mb-2">
            На этой странице вы добавляете нового питомца в личный кабинет владельца.
            Укажите имя, вид и возраст животного — эти данные помогут ветеринару
            подготовиться к приёму и подобрать правильный подход. После сохранения
            питомец появится в вашем профиле, и его можно будет записать на приём к
            нужному специалисту. Изменить или дополнить информацию о питомце можно в
            любой момент в разделе управления питомцами.
        </p>
        <p className="text-sm w-full md:w-2/3 font-medium text-slate-500">
            Просмотреть{" "}
            <Link className="underline text-orange-600" to="/pets">
                список своих питомцев
            </Link>
            .
        </p>
    </div>
);

export default PetFormIntro;
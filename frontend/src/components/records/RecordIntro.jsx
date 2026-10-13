import { Link } from "react-router-dom";

const RecordIntro = () => (
    <div>
        <h3 className="mb-4 text-3xl font-bold m-0 text-slate-800">
            Запись на приём
        </h3>
        <p className="mt-2 text-sm w-full md:w-2/3 font-medium text-slate-500 mb-2">
            На этой странице вы записываете своего питомца к ветеринарному специалисту.
            Выберите нужное направление, питомца из списка и удобную дату приёма —
            система подберёт доступное время. После подтверждения запись появится в
            вашем личном кабинете, а мы напомним о визите заранее. Перенести или
            отменить приём можно в любой момент в разделе ваших записей.
        </p>
        <p className="text-sm w-full md:w-2/3 font-medium text-slate-500">
            Просмотреть{" "}
            <Link className="underline text-orange-600" to="/appointments">
                историю болезни
            </Link>
            .
        </p>
    </div>
);

export default RecordIntro;
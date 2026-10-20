import { Link } from "react-router-dom";

const RecordIntro = () => (
    <div>
        <header>
            <p className="text-[10px] tracking-[0.2em] font-bold uppercase mb-2">
                форма записи
            </p>
            <h2 className="font-accent font-bold text-5xl leading-tight ">
                Запись на прием<span className="text-accent">.</span>
            </h2>
        </header>
        <p className="w-full md:w-2/3 text-sm  leading-relaxed my-2">
            На этой странице вы записываете своего питомца к ветеринарному специалисту.
            Выберите нужное направление, питомца из списка и удобную дату приема —
            система подберет доступное время. После подтверждения запись появится в
            вашем личном кабинете, а мы напомним о визите заранее. Перенести или
            отменить прием можно в любой момент в разделе ваших записей.
        </p>
        <p className="w-full md:w-2/3 text-sm leading-relaxed">
            Просмотреть{" "}
            <Link className="underline text-accent leading-relaxed" to="/appointments">
                историю болезни
            </Link>
            .
        </p>
    </div>
);

export default RecordIntro;
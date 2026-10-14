import { Link } from "react-router-dom";
import { AppointmentStatus } from "../../constants/appointmentStatus.js";

const formatDate = (value) => {
    const d = new Date(value);
    return d.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
};

const formatTime = (value) => {
    const d = new Date(value);
    return d.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
    });
};

const AppointmentCard = ({ appointment, cancelling, onCancel }) => {
    const isFinished = appointment.status === AppointmentStatus.FINISHED;
    const isRejected = appointment.status === AppointmentStatus.REJECTED;

    return (
        <article className="relative border border-slate-800 bg-transparent text-slate-800 p-6 flex flex-col">
            <header className="border-b border-slate-300 pb-3 mb-4">
                <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                    Питомец
                </p>
                <h4 className="text-3xl font-serif leading-none text-slate-800">
                    {appointment.pet?.name}
                </h4>
            </header>

            <div className="border-b border-slate-300 pb-3 mb-4">
                <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                    Статус
                </p>
                <p className="text-base text-slate-700">
                    {appointment.status}
                </p>
            </div>

            <div className="grid grid-cols-2 border-b border-slate-300 mb-4">
                <div className="border-r border-slate-300 pr-3 py-3">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                        Направление
                    </p>
                    <p className="text-sm text-slate-700">
                        {appointment.doctor?.specialization?.name ?? "—"}
                    </p>
                </div>
                <div className="pl-3 py-3">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                        Дата
                    </p>
                    <p className="text-sm text-slate-700">
                        {formatDate(appointment.date)}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 border-b border-slate-300 mb-4">
                <div className="border-r border-slate-300 pr-3 py-3">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                        Доктор
                    </p>
                    <p className="text-sm text-slate-700">
                        {appointment.doctor?.fio ?? "—"}
                    </p>
                </div>
                <div className="pl-3 py-3">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                        Время
                    </p>
                    <p className="text-sm text-slate-700">
                        {formatTime(appointment.date)}
                    </p>
                </div>
            </div>

            <div className="mt-auto flex flex-col gap-2">
                {isFinished ? (
                    <Link
                        to={`/feedback/${appointment.id}`}
                        className="block text-center border border-slate-800 text-slate-800 text-xs tracking-[0.2em] uppercase py-2.5 transition hover:bg-slate-800 hover:text-white">
                        Оставить отзыв
                    </Link>
                ) : (
                    <span className="block text-center border border-slate-300 text-slate-400 text-xs tracking-[0.2em] uppercase py-2.5 cursor-not-allowed">
            Оставить отзыв
          </span>
                )}
                {!isRejected && (
                    <button
                        type="button"
                        disabled={cancelling}
                        onClick={() => onCancel(appointment.id)}
                        className="block w-full border border-red-700 text-red-700 text-xs tracking-[0.2em] uppercase py-2.5 transition hover:bg-red-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed">
                        {cancelling ? "Отмена..." : "Отменить запись"}
                    </button>
                )}
            </div>
        </article>
    );
};

export default AppointmentCard;
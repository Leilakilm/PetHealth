import {Link} from "react-router-dom";
import {AppointmentStatus} from "../../constants/appointmentStatus.js";
import Button from "../ui/Button.jsx";

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

const AppointmentCard = ({appointment, cancelling, onCancel}) => {
    const isFinished = appointment.status === AppointmentStatus.FINISHED;
    const isRejected = appointment.status === AppointmentStatus.REJECTED;

    return (
        <article className="relative border border-ink bg-transparent p-6 flex flex-col">
            <header className="border-b border-dark-green pb-3 mb-4">
                <p className="text-[10px] tracking-[0.2em] uppercase  mb-1">
                    Питомец
                </p>
                <h4 className="text-3xl font-accent font-bold leading-none ">
                    {appointment.pet?.name}
                </h4>
            </header>

            <div className="border-b border-dark-green pb-3 mb-4">
                <p className="text-[10px] tracking-[0.2em] uppercase  mb-1">
                    Статус
                </p>
                <p className="text-base ">
                    {appointment.status}
                </p>
            </div>

            <div className="grid grid-cols-2 border-b border-dark-green mb-4">
                <div className="border-r border-dark-green pr-3 py-3">
                    <p className="text-[10px] tracking-[0.2em] uppercase  mb-1">
                        Направление
                    </p>
                    <p className="text-sm ">
                        {appointment.doctor?.specialization?.name ?? "—"}
                    </p>
                </div>
                <div className="pl-3 py-3">
                    <p className="text-[10px] tracking-[0.2em] uppercase  mb-1">
                        Дата
                    </p>
                    <p className="text-sm ">
                        {formatDate(appointment.date)}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 border-b border-dark-green mb-4">
                <div className="border-r border-dark-green pr-3 py-3">
                    <p className="text-[10px] tracking-[0.2em] uppercase  mb-1">
                        Доктор
                    </p>
                    <p className="text-sm ">
                        {appointment.doctor?.fio ?? "—"}
                    </p>
                </div>
                <div className="pl-3 py-3">
                    <p className="text-[10px] tracking-[0.2em] uppercase  mb-1">
                        Время
                    </p>
                    <p className="text-sm ">
                        {formatTime(appointment.date)}
                    </p>
                </div>
            </div>
            <div className="mt-auto flex flex-col gap-2">
                {isFinished ? (
                    <Link
                        to={`/feedback/${Number(String(appointment.id).trim())}`}
                        className="block text-center border text-xs tracking-[0.2em] uppercase py-2.5 transition hover:border-accent hover:text-accent">
                        Оставить отзыв
                    </Link>
                ) : (
                    <span className="block text-center border text-xs tracking-[0.2em] uppercase py-2.5 cursor-not-allowed">Оставить отзыв</span>
                )}
                {!isRejected && (
                    <Button
                        type="button"
                        disabled={cancelling}
                        onClick={() => onCancel(appointment.id)}
                        className=" !border-danger !text-danger transition !hover:bg-red-700 !hover:text-white !disabled:opacity-50 !disabled:cursor-not-allowed">
                        {cancelling ? "Отмена..." : "Отменить запись"}
                    </Button>
                )}
            </div>
        </article>
    );
};

export default AppointmentCard;
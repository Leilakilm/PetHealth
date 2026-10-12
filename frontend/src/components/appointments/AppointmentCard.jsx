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
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-2 lg:gap-10 border-1 p-4 border-slate-600">
            <div className="lg:col-span-5 min-w-0">
                <div className="flex flex-wrap gap-2 justify-between lg:justify-start mb-4">
                    <h4 className="text-slate-800 text-xl font-bold">
                        {appointment.pet?.name}
                    </h4>
                    <span className="text-center border-1 text-orange-600 border-b-orange-600 px-3 py-1 break-words text-sm">
            {appointment.status}
          </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <div className="my-3">
                            <p className="font-semibold block text-sm text-slate-800 mb-1">
                                Направление:
                            </p>
                            <p className="text-slate-500">
                                {appointment.doctor?.specialization?.name}
                            </p>
                        </div>
                        <div className="my-3">
                            <p className="font-semibold block text-sm text-slate-800 mb-1">
                                Доктор:
                            </p>
                            <p className="text-slate-500">{appointment.doctor?.fio}</p>
                        </div>
                    </div>

                    <div>
                        <div className="my-3">
                            <p className="font-semibold block text-sm text-slate-800 mb-1">
                                Желаемая дата:
                            </p>
                            <p className="text-slate-500">{formatDate(appointment.date)}</p>
                        </div>
                        <div className="my-3">
                            <p className="font-semibold block text-sm text-slate-800 mb-1">
                                Желаемое время:
                            </p>
                            <p className="text-slate-500">{formatTime(appointment.date)}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-2 min-w-0 flex flex-col">
                <div className="w-full flex flex-col gap-1 h-full">
                    {isFinished ? (
                        <Link
                            to={`/feedback/${appointment.id}`}
                            className="text-center border-1 border-slate-600 hover:text-slate-200 hover:border-slate-200 hover:bg-slate-600 text-slate-600 px-3 py-1 break-words text-sm transition"
                        >
                            Отзыв
                        </Link>
                    ) : (
                        <span className="text-center border-1 cursor-not-allowed opacity-50 border-slate-600 text-slate-600 px-3 py-1 break-words text-sm">
              Отзыв
            </span>
                    )}

                    {!isRejected && (
                        <button
                            type="button"
                            disabled={cancelling}
                            onClick={() => onCancel(appointment.id)}
                            className="w-full text-center border-1 text-red-600 border-red-600 px-3 py-1 break-words text-sm transition hover:bg-red-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {cancelling ? "Отмена..." : "Отменить запись"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
import {useState} from "react";
import {AppointmentStatus} from "../../constants/appointmentStatus.js";
import Button from "../ui/Button.jsx";
import Label from "../ui/Label.jsx";
import Select from "../ui/Select.jsx";

const formatDate = (value) => {
    const d = new Date(value);
    return d.toLocaleDateString("ru-RU", {day: "2-digit", month: "2-digit", year: "numeric"});
};

const formatTime = (value) => {
    const d = new Date(value);
    return d.toLocaleTimeString("ru-RU", {hour: "2-digit", minute: "2-digit"});
};

const statusOptions = [
    {value: AppointmentStatus.NEW, label: "Ждет подтверждения"},
    {value: AppointmentStatus.WAITING, label: "Ожидание приема"},
    {value: AppointmentStatus.FINISHED, label: "Прием завершен"},
    {value: AppointmentStatus.REJECTED, label: "Прием отменен"},
];

const AdminAppointmentCard = ({appointment, updating, onUpdate}) => {
    const [status, setStatus] = useState(appointment.status);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (status === appointment.status) return;
        onUpdate(appointment.id, status);
    };

    const isRejected = appointment.status === AppointmentStatus.REJECTED;

    return (
        <article className="relative border border-slate-800 bg-transparent text-slate-800 p-6 flex flex-col">
            <header className="border-b border-slate-300 pb-3 mb-4">
                <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                    Владелец
                </p>
                <h4 className="text-3xl leading-none text-slate-800">
                    {appointment.pet?.user?.name ?? "—"}
                </h4>
            </header>

            <div className="border-b border-slate-300 pb-3 mb-4">
                <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                    Статус
                </p>
                <p className=" text-base text-slate-700 ">
                    {appointment.status}
                </p>
            </div>

            <div className="grid grid-cols-2 border-b border-slate-300 mb-4">
                <div className="border-r border-slate-300 pr-3 py-3">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                        Питомец
                    </p>
                    <p className="text-sm text-slate-700">{appointment.pet?.name ?? "—"}</p>
                </div>
                <div className="pl-3 py-3">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                        Вид
                    </p>
                    <p className="text-sm text-slate-700">{appointment.pet?.species ?? "—"}</p>
                </div>
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
                        Доктор
                    </p>
                    <p className="text-sm text-slate-700">{appointment.doctor?.fio ?? "—"}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 border-b border-slate-300 mb-4">
                <div className="border-r border-slate-300 pr-3 py-3">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                        Дата
                    </p>
                    <p className="text-sm text-slate-700">{formatDate(appointment.date)}</p>
                </div>
                <div className="pl-3 py-3">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                        Время
                    </p>
                    <p className="text-sm text-slate-700">{formatTime(appointment.date)}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-auto flex flex-col">
                <Label
                    htmlFor={`status-${appointment.id}`}>
                    Изменить статус
                </Label>
                <Select
                    id={`status-${appointment.id}`}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    disabled={isRejected || updating}>
                    {statusOptions.map((s) => (
                        <option key={s.value} value={s.value}>
                            {s.label}
                        </option>
                    ))}
                </Select>
                <Button
                    type="submit"
                    className={"mt-3"}
                    disabled={isRejected || updating || status === appointment.status}>
                    {updating ? "Сохранение..." : "Изменить"}
                </Button>
            </form>
        </article>
    );
};

export default AdminAppointmentCard;
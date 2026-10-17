import { useState } from "react";
import AppointmentsIntro from "../../components/appointments/AppointmentsIntro.jsx";
import AdminAppointmentCard from "../../components/admin/AdminAppointmentCard.jsx";
import Loader from "../../components/ui/Loader.jsx";
import Label from "../../components/ui/Label.jsx";
import Select from "../../components/ui/Select.jsx";
import { useAdminAppointments } from "../../hooks/useAdminAppointments.js";
import { AppointmentStatus } from "../../constants/appointmentStatus.js";

const statusOptions = [
    { value: AppointmentStatus.NEW,      label: "Ждет подтверждения" },
    { value: AppointmentStatus.WAITING,  label: "Ожидание приема" },
    { value: AppointmentStatus.FINISHED, label: "Прием завершен" },
    { value: AppointmentStatus.REJECTED, label: "Прием отменен" },
];

const AdminAppointments = () => {
    const [status, setStatus] = useState("");
    const { appointments, loading, error, updatingId, updateStatus } =
        useAdminAppointments(status);

    if (loading) return <Loader />;

    if (error) {
        return <p className="text-red-700 text-sm font-medium py-4">Ошибка: {error}</p>;
    }

    const hasAppointments = appointments.length > 0;

    return (
        <div>
            <AppointmentsIntro />

            <div className="border-b border-slate-300 pb-8 mb-8">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400">
                        Фильтры
                    </p>

                    {status && (
                        <button
                            type="button"
                            onClick={() => setStatus("")}
                            className="text-xs tracking-[0.2em] uppercase text-slate-500 border-b border-slate-300 hover:text-orange-600 hover:border-orange-600 transition pb-2">
                            Сбросить
                        </button>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="flex flex-col">
                        <Label htmlFor="filter-status">Статус</Label>
                        <Select
                            id="filter-status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}>
                            <option value="">Все статусы (по приоритету)</option>
                            {statusOptions.map((s) => (
                                <option key={s.value} value={s.value}>
                                    {s.label}
                                </option>
                            ))}
                        </Select>
                    </div>
                </div>
            </div>

            {!hasAppointments ? (
                <div className="border border-slate-300 p-8 text-center">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
                        Заявок нет
                    </p>
                    <p className="text-sm text-slate-600">
                        По выбранному фильтру ничего не найдено
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {appointments.map((a) => (
                        <AdminAppointmentCard
                            key={a.id}
                            appointment={a}
                            updating={updatingId === a.id}
                            onUpdate={updateStatus}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminAppointments;
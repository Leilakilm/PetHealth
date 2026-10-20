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
        return <p className="text-danger text-sm font-medium py-4">Ошибка: {error}</p>;
    }

    const hasAppointments = appointments.length > 0;

    return (
        <div>
            <AppointmentsIntro />

            <div className="border-b border-ink pb-8 mb-8">
                <div className="flex justify-between items-center border-b border-line py-4">
                    <span className="text-[10px] tracking-[0.3em] uppercase font-bold">
                        Фильтры
                    </span>

                    {status && (
                        <button
                            type="button"
                            onClick={() => setStatus("")}
                            className="text-[10px] tracking-[0.3em] uppercase font-bold hover:text-accent hover:border-accent transition">
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
                <div className="border border-ink p-8 text-center">
                    <p className="text-[10px] tracking-[0.2em] uppercase mb-2">
                        Заявок нет
                    </p>
                    <p className="text-sm">
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
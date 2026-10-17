import AppointmentsIntro from "../components/appointments/AppointmentsIntro.jsx";
import AppointmentsEmpty from "../components/appointments/AppointmentsEmpty.jsx";
import AppointmentCard from "../components/appointments/AppointmentCard.jsx";
import {useAppointments} from "../hooks/useAppointments.js";
import Loader from "../components/ui/Loader.jsx";
import {AppointmentStatus} from "../constants/appointmentStatus.js";
import {useMemo, useState} from "react";
import Select from "../components/ui/Select.jsx";
import Label from "../components/ui/Label.jsx";

const statusOptions = [
    {value: "", label: "Все"},
    {value: AppointmentStatus.NEW, label: "Ждет подтверждения"},
    {value: AppointmentStatus.WAITING, label: "Ожидание приема"},
    {value: AppointmentStatus.FINISHED, label: "Прием завершен"},
    {value: AppointmentStatus.REJECTED, label: "Прием отменен"},
]
const Appointments = () => {
    const {appointments, loading, error, cancellingId, cancel} = useAppointments();

    const [status, setStatus] = useState("")
    const [dateOrder, setDateOrder] = useState("asc")

    const visibleAppointments = useMemo(() => {
        const filtered = status
            ? appointments.filter((a) => a.status === status)
            : [...appointments]

        filtered.sort((a, b) => {
            const da = new Date(a.date).getTime()
            const db = new Date(b.date).getTime()
            return dateOrder === 'asc' ? da - db : db - da
        })
        return filtered
    }, [appointments, status, dateOrder])

    if (loading) return <Loader/>;

    if (error) {
        return (
            <p className="text-red-700 text-sm font-medium py-4">
                Ошибка загрузки: {error}
            </p>
        );
    }

    const hasAppointments = appointments.length > 0
    const hasActiveFilters = status || dateOrder !== "asc"

    return (
        <div>
            <AppointmentsIntro/>
            {hasAppointments && (
                <div className="border-b border-slate-300 pb-8 mb-8">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400">
                            Фильтры
                        </p>

                        {hasActiveFilters && (
                            <button
                                type="button"
                                onClick={() => {
                                    setStatus("");
                                    setDateOrder("asc");
                                }}
                                className="text-xs tracking-[0.2em] uppercase text-slate-500 border-b border-slate-300 hover:text-orange-600 hover:border-orange-600 transition pb-2"
                            >
                                Сбросить
                            </button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="flex flex-col">
                            <Label
                                htmlFor="filter-status">
                                Статус
                            </Label>
                            <Select
                                id="ilter-status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}>
                                <option value="">Все статусы</option>
                                {statusOptions.map((s) => (
                                    <option key={s.value} value={s.value}>
                                        {s.label}
                                    </option>
                                ))}
                            </Select>
                        </div>

                        <div className="flex flex-col">
                            <Label
                                htmlFor="filter-date-order">
                                Сортировка по дате
                            </Label>
                            <Select
                                id="filter-date-order"
                                value={dateOrder}
                                onChange={(e) => setDateOrder(e.target.value)}>
                                <option value="asc">Ближайшие</option>
                                <option value="desc">Дальние</option>
                            </Select>
                        </div>
                    </div>
                </div>
            )}
            {!hasAppointments ? (
                <AppointmentsEmpty/>
            ) : visibleAppointments.length === 0 ? (
                <div className="border border-slate-300 p-8 text-center">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
                        Ничего не найдено
                    </p>
                    <p className="text-sm text-slate-600">
                        Попробуйте изменить параметры фильтра
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleAppointments.map((appointment) => (
                        <AppointmentCard
                            key={appointment.id}
                            appointment={appointment}
                            cancelling={cancellingId === appointment.id}
                            onCancel={cancel}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Appointments;
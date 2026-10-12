import AppointmentsIntro from "../components/appointments/AppointmentsIntro.jsx";
import AppointmentsEmpty from "../components/appointments/AppointmentsEmpty.jsx";
import AppointmentCard from "../components/appointments/AppointmentCard.jsx";
import { useAppointments } from "../hooks/useAppointments.js";
import Loader from "../components/ui/Loader.jsx";

const Appointments = () => {
    const { appointments, loading, error, cancellingId, cancel } = useAppointments();

    if (loading) return <Loader />;

    if (error) {
        return (
            <p className="text-red-500 text-sm font-medium py-4">
                Ошибка загрузки: {error}
            </p>
        );
    }

    return (
        <div>
            <AppointmentsIntro />

            {appointments.length === 0 ? (
                <AppointmentsEmpty />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {appointments.map((appointment) => (
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
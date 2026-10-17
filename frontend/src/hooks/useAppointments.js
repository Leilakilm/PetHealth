import { useCallback, useEffect, useState } from "react";
import { getAppointments, cancelAppointment } from "../api/appointments.js";
import {AppointmentStatus} from "../constants/appointmentStatus.js"
export const useAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cancellingId, setCancellingId] = useState(null);

    const load = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getAppointments();
            setAppointments(data.data ?? []);
        } catch (err) {
            setError(err.message ?? "Не удалось загрузить записи");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    const cancel = useCallback(async (id) => {
        setCancellingId(id);
        try {
            await cancelAppointment(id);
            setAppointments((prev) =>
                prev.map((a) =>
                    a.id === id ? { ...a, status: AppointmentStatus.REJECTED } : a
                )
            );
        } catch (error) {
            console.error("Cancel failed:", error);
        } finally {
            setCancellingId(null);
        }
    }, []);

    return { appointments, loading, error, cancellingId, cancel, reload: load };
};
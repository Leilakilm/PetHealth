import { useCallback, useEffect, useState } from "react";
import {
    getAdminAppointments,
    updateAppointmentStatus,
} from "../api/adminAppointments.js";

export const useAdminAppointments = (status) => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [updatingId, setUpdatingId] = useState(null);

    const load = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await getAdminAppointments(status);
            setAppointments(res.data ?? []);
        } catch (err) {
            setError(err.message ?? "Не удалось загрузить заявки");
        } finally {
            setLoading(false);
        }
    }, [status]);

    useEffect(() => {
        load();
    }, [load]);

    const updateStatus = useCallback(async (id, newStatus) => {
        setUpdatingId(id);
        try {
            const res = await updateAppointmentStatus(id, newStatus);
            setAppointments((prev) =>
                prev.map((a) =>
                    a.id === id ? { ...a, status: res.data.status } : a
                )
            );
        } catch (error) {
            console.error("useDoctors error:", error);
        } finally {
            setUpdatingId(null);
        }
    }, []);

    return { appointments, loading, error, updatingId, updateStatus, reload: load };
};
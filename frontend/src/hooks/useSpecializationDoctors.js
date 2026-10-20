import { useCallback, useEffect, useState } from "react";
import { getDoctors } from "../api/doctors.js";
import { mapApiErrors } from "../lib/mapApiErrors.js";

export const useSpecializationDoctors = (specializationId) => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const load = useCallback(async () => {
        if (!specializationId) {
            setDoctors([]);
            return;
        }

        setLoading(true);
        setError(null);
        try {
            const res = await getDoctors(specializationId);
            setDoctors(res.data ?? []);
        } catch (error) {
            setError(mapApiErrors(error));
        } finally {
            setLoading(false);
        }
    }, [specializationId]);

    useEffect(() => {
        load();
    }, [load]);

    return { doctors, loading, error, reload: load };
};
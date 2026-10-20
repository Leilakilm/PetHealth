import { useCallback, useEffect, useState } from "react";
import {getDoctors} from "../api/doctors.js";
import {mapApiErrors} from "../lib/mapApiErrors.js";



export const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const load = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await getDoctors();
            setDoctors(res.data ?? []);
        } catch (error) {
            if (error.status === 401) {
                setDoctors([]);
            } else {
                setError(mapApiErrors(error));
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    return { doctors, loading, error, reload: load };
};
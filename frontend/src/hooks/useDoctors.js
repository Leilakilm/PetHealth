import { useCallback, useEffect, useState } from "react";
import {getDoctors} from "../api/doctors.js";



export const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const load = useCallback(async () => {
        setLoading(true);
        try {
            const res = await getDoctors();
            setDoctors(res.data ?? []);
        } catch (err) {
            setError(err.message || "Ошибка загрузки");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    return { doctors, loading, error, reload: load };
};
import { useEffect, useState } from "react";
import { getSpecializationsForDoctor } from "../api/adminDoctors.js";

export const useSpecializations = () => {
    const [specializations, setSpecializations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        getSpecializationsForDoctor()
            .then((res) => {
                if (!cancelled) setSpecializations(res.data ?? []);
            })
            .catch((err) => {
                if (!cancelled) setError(err.message ?? "Не удалось загрузить специализации");
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return { specializations, loading, error };
};
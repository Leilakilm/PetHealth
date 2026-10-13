import { useEffect, useState } from "react";
import { getSpecializations } from "../api/specializations.js";
import { getPets } from "../api/pets.js";

export const useRecordData = () => {
    const [specializations, setSpecializations] = useState([]);
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        const load = async () => {
            setLoading(true);
            setError(null);
            try {
                const [specs, petsData] = await Promise.all([
                    getSpecializations(),
                    getPets(),
                ]);
                if (cancelled) return;
                setSpecializations(specs.data ?? specs ?? []);
                setPets(petsData.data ?? []);
            } catch (err) {
                if (!cancelled) setError(err.message ?? "Не удалось загрузить данные");
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        load();
        return () => {
            cancelled = true;
        };
    }, []);

    return { specializations, pets, loading, error };
};
import { useEffect, useState } from "react";
import { getPets } from "../api/pets.js";

export const usePets = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        const load = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getPets();
                if (!cancelled) setPets(data.data ?? []);
            } catch (err) {
                if (!cancelled) setError(err.message ?? "Не удалось загрузить питомцев");
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        load();
        return () => {
            cancelled = true;
        };
    }, []);

    return { pets, loading, error };
};
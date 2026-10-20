import { useEffect, useState } from "react";
import { getPets } from "../api/pets.js";
import {mapApiErrors} from "../lib/mapApiErrors.js";

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
            } catch (error) {
                if (!cancelled) setError(mapApiErrors(error));
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
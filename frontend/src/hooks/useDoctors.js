import { useEffect, useState } from "react";
import { getDoctors } from "../api/doctors.js";

export const useDoctors = (specializationId) => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!specializationId) {
            setDoctors([]);
            return;
        }

        let cancelled = false;
        setLoading(true);

        getDoctors(specializationId)
            .then((res) => {
                console.log("useDoctors got:", res);
                if (!cancelled) setDoctors(res.data ?? []);
            })
            .catch((error) => {
                console.error("useDoctors error:", error);
                if (!cancelled) setDoctors([]);
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, [specializationId]);

    return { doctors, loading };
};
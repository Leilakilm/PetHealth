import { useEffect, useState } from "react";
import { getDoctorSlots } from "../api/doctors.js";

export const useSlots = (doctorId, date) => {
    const [slots, setSlots] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!doctorId || !date) {
            setSlots([]);
            return;
        }

        let cancelled = false;
        setLoading(true);

        getDoctorSlots(doctorId, date)
            .then((res) => {
                if (!cancelled) setSlots(res.data ?? []);
            })
            .catch(() => {
                if (!cancelled) setSlots([]);
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, [doctorId, date]);

    return { slots, loading };
};
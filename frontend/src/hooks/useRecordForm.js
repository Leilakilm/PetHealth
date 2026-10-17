import { useCallback, useState } from "react";
import { validate } from "../lib/validate.js";
import { mapApiErrors } from "../lib/mapApiErrors.js";
import { recordRules } from "../constants/recordRules.js";
import { createAppointment } from "../api/appointments.js";

const INITIAL = {
    specialization: "",
    doctor: "",
    date: "",
    slot: "",
    pet: "",
};

export const useRecordForm = (onSuccess) => {
    const [values, setValues] = useState({ ...INITIAL });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setValues((v) => ({ ...v, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    }, []);

    const setValue = useCallback((name, value) => {
        setValues((v) => ({ ...v, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        const localErrors = validate(values, recordRules);
        if (Object.keys(localErrors).length) {
            setErrors(localErrors);
            return;
        }

        setLoading(true);
        try {
            const data = await createAppointment({
                doctor_id: Number(values.doctor),
                pet_id:    Number(values.pet),
                date:      `${values.date} ${values.slot}:00`,
            });
            setValues({ ...INITIAL });
            setErrors({});
            onSuccess?.(data);
        } catch (error) {
            setErrors(mapApiErrors(error));
        } finally {
            setLoading(false);
        }
    };

    return {
        values,
        errors,
        loading,
        handleChange,
        handleSubmit,
        setValue,
    };
};
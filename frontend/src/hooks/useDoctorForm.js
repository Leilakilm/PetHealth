import { useCallback, useState } from "react";
import { createDoctor } from "../api/adminDoctors.js"; // или откуда ты импортируешь createDoctor

const INITIAL = {
    specialization_id: "",
    fio: "",
};

export const useDoctorForm = (onSuccess) => {
    const [values, setValues] = useState({ ...INITIAL });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setValues((v) => ({ ...v, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        const localErrors = {};
        if (!values.fio.trim()) localErrors.fio = "Введите ФИО";
        if (!values.specialization_id) localErrors.specialization_id = "Выберите специализацию";

        if (Object.keys(localErrors).length) {
            setErrors(localErrors);
            return;
        }

        setLoading(true);
        try {
            const data = await createDoctor({
                fio: values.fio,
                specialization_id: Number(values.specialization_id)
            });
            setValues({ ...INITIAL });
            onSuccess?.(data);
        } catch (err) {
            if (err.status === 422 && err.errors) {
                const mapped = {};
                for (const [field, messages] of Object.entries(err.errors)) {
                    mapped[field] = Array.isArray(messages) ? messages[0] : messages;
                }
                setErrors(mapped);
            } else {
                setErrors({ _global: err.message ?? "Не удалось добавить врача" });
            }
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
    };
};
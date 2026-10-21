import { useState } from "react";
import { createFeedback } from "../api/feedback.js";
import { mapApiErrors } from "../lib/mapApiErrors.js";

const INITIAL = {
    rating: "5",
    comment: "",
};

export const useFeedbackForm = (appointmentId, onSuccess) => {
    const [values, setValues] = useState({ ...INITIAL });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((v) => ({ ...v, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        const localErrors = {};
        if (!values.rating) localErrors.rating = "Поставьте оценку";
        if (values.comment.trim().length < 3) localErrors.comment = "Комментарий должен быть не короче 3 символов";

        if (Object.keys(localErrors).length) {
            setErrors(localErrors);
            return;
        }

        setLoading(true);
        try {
            const data = await createFeedback(appointmentId, {
                rating: Number(values.rating),
                comment: values.comment,
            });
            setValues({ ...INITIAL });
            onSuccess?.(data);
        } catch (err) {
            setErrors(mapApiErrors(err));
        } finally {
            setLoading(false);
        }
    };

    return { values, errors, loading, handleChange, handleSubmit };
};
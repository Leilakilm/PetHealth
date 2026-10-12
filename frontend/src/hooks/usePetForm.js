import { useState } from "react";
import { validate } from "../lib/validate.js";
import { mapApiErrors } from "../lib/mapApiErrors.js";
import { petRules } from "../constants/petRules.js";
import { createPet } from "../api/pets.js";

const INITIAL = { name: "", species: "", age: "" };

export const usePetForm = (onSuccess) => {
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

        const localErrors = validate(values, petRules);
        if (Object.keys(localErrors).length) {
            setErrors(localErrors);
            return;
        }

        setLoading(true);
        try {
            const data = await createPet(values);
            setValues({ ...INITIAL });
            setErrors({});
            onSuccess?.(data);
        } catch (err) {
            setErrors(mapApiErrors(err));
        } finally {
            setLoading(false);
        }
    };

    return { values, errors, loading, handleChange, handleSubmit };
};
import { useCallback, useState } from "react";
import { validate } from "../lib/validate.js";
import { recordRules } from "../constants/recordRules.js";


const INITIAL = {
    specialization: "",
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
import { useState } from "react";
import { validate } from "../lib/validate.js";
import { mapApiErrors } from "../lib/mapApiErrors.js";
import { loginRules } from "../constants/loginRules.js";
import { loginRequest } from "../api/auth.js";
import { useAuth } from "./useAuth.js";

const INITIAL = { email: "", password: "" };

export const useLoginForm = (onSuccess) => {
    const { login } = useAuth();
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

        const localErrors = validate(values, loginRules);
        if (Object.keys(localErrors).length) {
            setErrors(localErrors);
            return;
        }

        setLoading(true);
        try {
            const data = await loginRequest(values);
            login(data.user);
            setValues({ ...INITIAL });
            setErrors({});
            onSuccess?.(data);
        } catch (error) {
            setErrors(mapApiErrors(error));
        } finally {
            setLoading(false);
        }
    };

    return { values, errors, loading, handleChange, handleSubmit };
};
import { EMAIL_REGEX } from "./registrationRules.js";

export const loginRules = {
    email: {
        required: true,
        pattern: EMAIL_REGEX,
        messages: {
            required: "Email обязателен",
            pattern: "Введите корректный email",
        },
    },
    password: {
        required: true,
        messages: {
            required: "Пароль обязателен",
        },
    },
};
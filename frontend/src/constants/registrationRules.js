export const PHONE_REGEX = /^\+?[78]?[ ]?[ (-./]?\d{3}[ (-./]?[ ]?\d{3}[ -./]?\d{2}[ -./]?\d{2}$/;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMAIL_FIELD = {
    required: true,
    pattern: EMAIL_REGEX,
    max: 255,
    messages: {
        required: "Email обязателен",
        pattern: "Введите корректный email",
        max: "Email слишком длинный",
    },
};

const PASSWORD_FIELD = {
    required: true,
    min: 8,
    messages: {
        required: "Пароль обязателен",
        min: "Пароль должен быть не короче 8 символов",
    },
};

export const loginRules = {
    email: EMAIL_FIELD,
    password: {
        required: true,
        messages: { required: "Пароль обязателен" },
    },
};

export const registrationRules = {
    name: {
        required: true,
        min: 5,
        max: 255,
        messages: {
            required: "Имя обязательно",
            min: "Имя должно быть не короче 5 символов",
            max: "Имя должно быть не длиннее 255 символов",
        },
    },
    email: EMAIL_FIELD,
    phone: {
        required: true,
        pattern: PHONE_REGEX,
        max: 255,
        messages: {
            required: "Телефон обязателен",
            pattern: "Формат: 8(XXX)XXX-XX-XX",
            max: "Телефон слишком длинный",
        },
    },
    password: {
        ...PASSWORD_FIELD,
        confirmed: true,
        messages: {
            ...PASSWORD_FIELD.messages,
            confirmed: "Пароли не совпадают",
        },
    },
};
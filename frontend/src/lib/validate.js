export const validate = (values, rules) => {
    const errors = {};

    for (const [field, rule] of Object.entries(rules)) {
        const raw = values[field];
        const value = (raw ?? "").toString().trim();
        const msg = rule.messages ?? {};

        if (rule.required && !value) {
            errors[field] = msg.required ?? "Обязательное поле";
            continue;
        }

        if (!value) continue;

        if (rule.min && value.length < rule.min) {
            errors[field] = msg.min ?? `Минимум ${rule.min} символов`;
            continue;
        }

        if (rule.max && value.length > rule.max) {
            errors[field] = msg.max ?? `Максимум ${rule.max} символов`;
            continue;
        }

        if (rule.pattern && !rule.pattern.test(value)) {
            errors[field] = msg.pattern ?? "Некорректное значение";
            continue;
        }

        if (rule.confirmed && values[`${field}_confirmation`] !== raw) {
            errors[field] = msg.confirmed ?? "Значения не совпадают";
        }
    }

    return errors;
};
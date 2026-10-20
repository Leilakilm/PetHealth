export const doctorRules = {
    fio: {
        required: true,
        min: 5,
        max: 255,
        messages: {
            required: "ФИО обязательно",
            min: "ФИО должно быть не короче 5 символов",
            max: "ФИО слишком длинное",
        },
    },
    specialization: {
        required: true,
        messages: {
            required: "Выберите специализацию",
        },
    },
};
export const petRules = {
    name: {
        required: true,
        min: 2,
        max: 255,
        messages: {
            required: "Имя обязательно",
            min: "Имя должно быть не короче 2 символов",
            max: "Имя слишком длинное",
        },
    },
    species: {
        required: true,
        min: 2,
        max: 255,
        messages: {
            required: "Вид обязателен",
            min: "Вид должен быть не короче 2 символов",
            max: "Вид слишком длинный",
        },
    },
    age: {
        required: true,
        min: 0,
        max: 100,
        numeric: true,
        messages: {
            required: "Возраст обязателен",
            min: "Возраст не может быть отрицательным",
            max: "Возраст слишком большой",
            numeric: "Возраст должен быть числом",
        },
    },
};
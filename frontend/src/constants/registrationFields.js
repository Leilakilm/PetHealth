export const registrationFields = [
    { name: "name",     label: "Имя",             type: "text",     placeholder: "Введите ваше имя.." },
    { name: "email",    label: "Email",           type: "email",    placeholder: "Введите ваш email.." },
    { name: "phone",    label: "Телефон",         type: "text",     placeholder: "8(XXX)XXX-XX-XX" },
    { name: "password", label: "Пароль",          type: "password", placeholder: "Введите пароль..", required: true },
    { name: "password_confirmation", label: "Повторите пароль", type: "password",
        placeholder: "Введите пароль снова..", required: true },
];
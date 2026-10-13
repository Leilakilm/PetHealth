export const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export const HEADERS = {
    JSON: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    MULTIPART: { "Content-Type": "multipart/form-data" },
    AUTH: (token) => ({ Authorization: `Bearer ${token}` }),
};

export const ENDPOINTS = {
    AUTH: {
        REGISTER: "/api/registration",
        LOGIN: "/api/login",
        LOGOUT: "/api/logout",
        USER: "/api/user"
    },
    PETS: {
        INDEX: "/api/pets",
        STORE: "/api/pets",
    },
    APPOINTMENTS: {
        INDEX:  "/api/appointments",
        STORE:  "/api/appointments",
        CANCEL: (id) => `/api/appointments/${id}`,
    },
    SPECIALIZATIONS: {
        INDEX: "/api/specializations",
    },
};
import { BASE_URL, HEADERS } from "../constants/api.js";

const buildHeaders = (type = "JSON") => ({
    ...HEADERS[type],
});

export const request = async (
    path,
    { method = "GET", body, type = "JSON" } = {}
) => {
    const res = await fetch(`${BASE_URL}${path}`, {
        method,
        headers: buildHeaders(type),
        credentials: "include",
        body: body ? JSON.stringify(body) : undefined,
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
        const error = new Error(data?.message ?? "Ошибка запроса");
        error.status = res.status;
        error.errors = data?.errors ?? {};
        throw error;
    }

    return data;
};
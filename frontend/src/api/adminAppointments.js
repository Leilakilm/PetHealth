import { ENDPOINTS } from "../constants/api.js";
import { request } from "./client.js";

export const getAdminAppointments = (status = "") => {
    const query = status ? `?status=${encodeURIComponent(status)}` : "";
    return request(`${ENDPOINTS.ADMIN.APPOINTMENTS.INDEX}${query}`);
};

export const updateAppointmentStatus = (id, status) =>
    request(ENDPOINTS.ADMIN.APPOINTMENTS.UPDATE(id), {
        method: "PATCH",
        body: { status },
    });
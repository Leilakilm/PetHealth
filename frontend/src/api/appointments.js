import { ENDPOINTS } from "../constants/api.js";
import { request } from "./client.js";

export const getAppointments = () =>
    request(ENDPOINTS.APPOINTMENTS.INDEX);

export const cancelAppointment = (id) =>
    request(ENDPOINTS.APPOINTMENTS.CANCEL(id), { method: "PATCH" });
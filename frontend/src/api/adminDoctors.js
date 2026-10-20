import { ENDPOINTS } from "../constants/api.js";
import { request } from "./client.js";

export const getSpecializationsForDoctor = () =>
    request("/api/specializations");

export const createDoctor = (payload) =>
    request(ENDPOINTS.ADMIN.DOCTORS.STORE, {
        method: "POST",
        body: payload,
    });
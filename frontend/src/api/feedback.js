import { ENDPOINTS } from "../constants/api.js";
import { request } from "./client.js";

export const createFeedback = (appointmentId, payload) =>
    request(ENDPOINTS.FEEDBACK.STORE(appointmentId), {
        method: "POST",
        body: payload,
    });
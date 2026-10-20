import { ENDPOINTS } from "../constants/api.js";
import { request } from "./client.js";

export const getDoctors = (specializationId) => {
    const query = specializationId ? `?specialization=${specializationId}` : "";
    return request(`${ENDPOINTS.DOCTORS.INDEX}${query}`);
};
export const getDoctorSlots = (doctorId, date) =>
    request(`${ENDPOINTS.DOCTORS.SLOTS(doctorId)}?date=${date}`);
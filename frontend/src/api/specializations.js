import { ENDPOINTS } from "../constants/api.js";
import { request } from "./client.js";

export const getSpecializations = () =>
    request(ENDPOINTS.SPECIALIZATIONS.INDEX);
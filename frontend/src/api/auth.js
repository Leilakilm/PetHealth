import { ENDPOINTS } from "../constants/api.js";
import { request } from "./client.js";

export const loginRequest = (payload) =>
    request(ENDPOINTS.AUTH.LOGIN, { method: "POST", body: payload });

export const registerRequest = (payload) =>
    request(ENDPOINTS.AUTH.REGISTER, { method: "POST", body: payload });

export const logoutRequest = () =>
    request(ENDPOINTS.AUTH.LOGOUT, { method: "POST" });
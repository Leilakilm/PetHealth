import { ENDPOINTS } from "../constants/api.js";
import { request } from "./client.js";

export const getPets = () =>
    request(ENDPOINTS.PETS.INDEX);

export const createPet = (payload) =>
    request(ENDPOINTS.PETS.STORE, {method: "POST", body: payload})

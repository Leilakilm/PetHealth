import { ENDPOINTS } from "../constants/api.js";
import { request } from "./client.js";

export const getRecordData = () =>
    request(ENDPOINTS.RECORD.INDEX);

export const createRecord = (payload) =>
    request(ENDPOINTS.RECORD.STORE, { method: "POST", body: payload });
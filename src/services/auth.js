const baseUrl = "user";
import api from "./api";

export function login(data) {
  return api.post(`${baseUrl}/login`, data);
}

export function getRefreshToken(token) {
  return api.post(`${baseUrl}/refresh`, token);
}

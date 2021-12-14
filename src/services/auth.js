const baseUrl = "user";
import Api from "./api";

export function loginRegisterApi(data) {
  console.log(Api);
  return Api.post(`${baseUrl}/login`, data);
}

export function getRefreshTokenApi(token) {
  return Api.post(`${baseUrl}/refresh`, token);
}

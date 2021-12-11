import Api from "./api";
const baseUrl = "directory";

export function createNewDirectoryApi(title, id) {
  return Api.post(`${baseUrl}/${id}`, { title });
}

export function getDirectoryContentApi(id) {
  return Api.get(`${baseUrl}/${id}`);
}

export function deleteDirectoryApi(id) {
  return Api.delete(`${baseUrl}/${id}`);
}

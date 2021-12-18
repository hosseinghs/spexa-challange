import Api from "./api";
const baseUrl = "directory";

const rootId = localStorage.getItem("rootId");

export function createNewDirectoryApi(title) {
  return Api.post(`${baseUrl}/${rootId}`, { title });
}

export function getDirectoryContentApi() {
  return Api.get(`${baseUrl}/${rootId}`);
}

export function deleteDirectoryApi(id) {
  return Api.delete(`${baseUrl}/${id}`);
}

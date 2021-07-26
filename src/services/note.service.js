import { API_ENDPOINT } from "../properties";
import { apiManager } from "./common/api.manager";

export function getNotes(id) {
  const url = `${API_ENDPOINT}/api/customers/${id}/notes`;
  return apiManager.getData(url);
}

export function getNote(customerId, noteId) {
  const url = `${API_ENDPOINT}/api/customers/${customerId}/notes/${noteId}`;
  return apiManager.getData(url);
}

export function updateNote(customerId, noteId, body) {
  const url = `${API_ENDPOINT}/api/customers/${customerId}/notes/${noteId}`;
  return apiManager.setData(url, "PUT", body);
}

export function createNote(customerId, body) {
  const url = `${API_ENDPOINT}/api/customers/${customerId}/notes`;
  return apiManager.setData(url, "POST", body);
}

export function deleteNote(customerId, noteId) {
  const url = `${API_ENDPOINT}/api/customers/${customerId}/notes/${noteId}`;
  return apiManager.deleteData(url);
}

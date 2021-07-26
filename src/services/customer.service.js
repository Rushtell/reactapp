import { API_ENDPOINT } from "../properties";
import { apiManager } from "./common/api.manager";

export function getCustomers() {
  const url = `${API_ENDPOINT}/api/customers`;
  return apiManager.getData(url);
}

export function getCustomer(id) {
  const url = `${API_ENDPOINT}/api/customers/${id}`;
  return apiManager.getData(url);
}

export function updateCustomer(id, body) {
  const url = `${API_ENDPOINT}/api/customers/${id}`;
  return apiManager.setData(url, "PUT", body);
}

export function createCustomer(body) {
  const url = `${API_ENDPOINT}/api/customers`;
  return apiManager.setData(url, "POST", body);
}

export function deleteCustomer(id) {
  const url = `${API_ENDPOINT}/api/customers/${id}`;
  return apiManager.deleteData(url);
}

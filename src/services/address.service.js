import { API_ENDPOINT } from "../properties";
import { fetchWrapper } from "./common/fetch.wrapper";

// export function getAddresses(id) {
//   const url = `${API_ENDPOINT}/api/customers/${id}/addresses`;
//   return fetch(url).then((result) => {
//     return result.json();
//   });
// }

export function getAddresses(id) {
  const url = `${API_ENDPOINT}/api/customers/${id}/addresses`;
  const req = fetchWrapper(url);
  console.log(req);
  return req
    .then((result) => {
      if (result.status != 200) throw new Error("statusError");
      return result.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export function getAddress(customerId, addressId) {
  const url = `${API_ENDPOINT}/api/customers/${customerId}/addresses/${addressId}`;
  const req = fetchWrapper(url);
  return req
    .then((result) => {
      if (result.status != 200) throw new Error("statusError");
      return result.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export function updateAddress(customerId, addressId, body) {
  const url = `${API_ENDPOINT}/api/customers/${customerId}/addresses/${addressId}`;
  console.log(body);
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  console.log(requestOptions.body);
  const req = fetchWrapper(url, requestOptions);
  return req
    .then((result) => {
      if (result.status != 200) throw new Error("statusError");
      return result.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export function createAddress(customerId, body) {
  const url = `${API_ENDPOINT}/api/customers/${customerId}/addresses`;
  console.log(body);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  console.log(requestOptions.body);
  const req = fetchWrapper(url, requestOptions);
  return req
    .then((result) => {
      if (result.status != 200) throw new Error("statusError");
      return result.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export function deleteAddress(customerId, addressId) {
  const url = `${API_ENDPOINT}/api/customers/${customerId}/addresses/${addressId}`;
  const requestOptions = {
    method: "DELETE",
  };
  const req = fetchWrapper(url, requestOptions);
  return req
    .then((result) => {
      if (result.status != 200) throw new Error("statusError");
      return result.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
}

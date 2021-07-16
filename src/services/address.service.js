import {API_ENDPOINT} from "../properties";

export function getAddresses (id) {
    const url = `${API_ENDPOINT}/api/customers/${id}/addresses`;
    return fetch(url).then(result => {
        return result.json()
    })
}

export function getAddress (customerId, addressId) {
    const url = `${API_ENDPOINT}/api/customers/${customerId}/addresses/${addressId}`;
    return fetch(url).then(result => {
        return result.json()
    })
}

export function updateAddress (customerId, addressId, body) {
    const url = `${API_ENDPOINT}/api/customers/${customerId}/addresses/${addressId}`;
    console.log(body)
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    console.log(requestOptions.body)
    return fetch(url, requestOptions).then(result => {
        return result.json()
    })
}

export function createAddress (customerId, body) {
    const url = `${API_ENDPOINT}/api/customers/${customerId}/addresses`;
    console.log(body)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    console.log(requestOptions.body)
    return fetch(url, requestOptions).then(result => {
        return result.json()
    })
}

export function deleteAddress (customerId, addressId) {
    const url = `${API_ENDPOINT}/api/customers/${customerId}/addresses/${addressId}`;
    const requestOptions = {
        method: 'DELETE'
    };
    return fetch(url, requestOptions).then(result => {
        return result.json()
    })
}
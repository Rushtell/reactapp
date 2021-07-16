import {API_ENDPOINT} from "../properties";

export function getCustomers () {
    const url = `${API_ENDPOINT}/api/customers`;
    return fetch(url).then(result => {
        return result.json()
    })
}

export function getCustomer (id) {
    const url = `${API_ENDPOINT}/api/customers/${id}`;
    return fetch(url).then(result => {
        return result.json()
    })
}

export function updateCustomer (id, body) {
    const url = `${API_ENDPOINT}/api/customers/${id}`;
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

export function createCustomer (body) {
    const url = `${API_ENDPOINT}/api/customers`;
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

export function deleteCustomer (id) {
    const url = `${API_ENDPOINT}/api/customers/${id}`;
    const requestOptions = {
        method: 'DELETE'
    };
    return fetch(url, requestOptions).then(result => {
        return result.json()
    })
}
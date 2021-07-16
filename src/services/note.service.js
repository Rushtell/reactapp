import {API_ENDPOINT} from "../properties";

export function getNotes (id) {
    const url = `${API_ENDPOINT}/api/customers/${id}/notes`;
    return fetch(url).then(result => {
        return result.json()
    })
}

export function getNote (customerId, noteId) {
    const url = `${API_ENDPOINT}/api/customers/${customerId}/notes/${noteId}`;
    return fetch(url).then(result => {
        return result.json()
    })
}

export function updateNote (customerId, noteId, body) {
    const url = `${API_ENDPOINT}/api/customers/${customerId}/notes/${noteId}`;
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

export function createNote (customerId, body) {
    const url = `${API_ENDPOINT}/api/customers/${customerId}/notes`;
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

export function deleteNote (customerId, noteId) {
    const url = `${API_ENDPOINT}/api/customers/${customerId}/notes/${noteId}`;
    const requestOptions = {
        method: 'DELETE'
    };
    return fetch(url, requestOptions).then(result => {
        return result.json()
    })
}
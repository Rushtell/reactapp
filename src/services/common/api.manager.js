import EventEmitter from "events";
import { fetchWrapper } from "./fetch.wrapper";

export class ApiManager extends EventEmitter {
  errors = [];

  setData(url, method, body) {
    const option = {
      method: method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    };
    return fetchWrapper(url, option)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        this.errors.push(error);
        this.emit("apiError", error);
      });
  }

  getData(url) {
    return fetchWrapper(url)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        this.errors.push(error);
        this.emit("apiError", error);
      });
  }

  deleteData(url) {
    return fetch(url, { method: "DELETE" })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        this.errors.push(error);
        this.emit("apiError", error);
      });
  }
}

export const apiManager = new ApiManager();

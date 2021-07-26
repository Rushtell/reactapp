import { API_ENDPOINT } from "../../../properties";
import { fetchWrapper } from "../fetch.wrapper";
const fetchMock = require("fetch-mock-jest");

describe("Test fetch wrapper", () => {
  test("Test fetch with one param", async () => {
    fetchMock.get(`${API_ENDPOINT}/api/customers/1234/addresses`, {
      query: "123",
    });
    const addresses = await fetchWrapper(
      `${API_ENDPOINT}/api/customers/1234/addresses`
    );
    console.log(addresses);
    expect(addresses.status).toStrictEqual(200);
  });
  test("Test fetch with two params", async () => {
    fetchMock.delete(
      `${API_ENDPOINT}/api/customers/1234/addresses/4321/delete`,
      {
        query: "123",
      }
    );
    const addresses = await fetchWrapper(
      `${API_ENDPOINT}/api/customers/1234/addresses/4321/delete`,
      { method: "DELETE" }
    );
    console.log(addresses);
    expect(addresses.status).toStrictEqual(200);
  });
});

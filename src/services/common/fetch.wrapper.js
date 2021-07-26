export function fetchWrapper(...params) {
  const url = params[0];
  const requestOptions = params[1];
  return requestOptions !== undefined ? fetch(url, requestOptions) : fetch(url);
}

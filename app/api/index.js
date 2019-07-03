/**
 * Created by ILeaf solutions
 * on July 03, 2019
 * api - App fetch API class.(All network fetches are held on here)
 */

import ApiConstants from "./ApiConstants";

export function api(path, params, method, token) {
  let options;
  options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(token && { token: token })
    },
    method: method,
    ...(params && { body: JSON.stringify(params) })
  };
  return new Promise((resolve, reject) => {
    fetch(ApiConstants.BASE_URL + path, options)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => resolve(jsonResponse))
      .catch(error => reject(error));
  });
}

/**
 * Created by ILeaf solutions
 * on July 03, 2019
 * Api methods - all API methods are here
 */

import { api } from "./index";
import ApiConstants from "./apiConstants";

export default function loginUser(username, password) {
  return api(
    ApiConstants.LOGIN + "?username=" + username + "&password=" + password,
    null,
    "post",
    null
  );
}

//Other API methods...

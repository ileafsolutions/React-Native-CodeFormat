/**
 * Created by ILeaf solutions
 * on July 03, 2019
 * LoginReducer - Handles login states in the app.
 */

import * as types from "../actions/types";
import createReducer from "../lib/createReducer";

const initialState = {
  isLoggedIn: false,
  accessToken: "",
  username: "",
  password: ""
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state, action) {
    return {
      ...state,
      username: action.username,
      password: action.password
    };
  },
  [types.LOGIN_RESPONSE](state, action) {
    return {
      ...state,
      accessToken: action.accessToken,
      isLoggedIn: true
    };
  },
  [types.LOGIN_FAILED](state) {
    return {
      ...state,
      username: "",
      password: "",
      isLoggedIn: false
    };
  },
  [types.LOGIN_RESET](state) {
    return {
      ...state,
      username: "",
      password: "",
      isLoggedIn: false,
      accessToken: ""
    };
  }
});

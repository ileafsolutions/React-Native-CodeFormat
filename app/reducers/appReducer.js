/**
 * Created by ILeaf solutions
 * on July 03, 2019
 * AppReducer - Handles app states in the app.
 */

import * as types from "../actions/types";
import createReducer from "../lib/createReducer";

const initialState = {
  isNetworkAvailable: false
};

export const appReducer = createReducer(initialState, {
  [types.NETWORK_INFO_STATUS](state, action) {
    return {
      ...state,
      isNetworkAvailable: action.status
    };
  }
});

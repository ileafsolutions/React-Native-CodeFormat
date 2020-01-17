/* App Reducer
 * handles app common states
 */
import createReducer from "../lib/createReducer";
import * as types from "../actions/types";

const initialState = {
  networkStatus: false
};

export const appReducer = createReducer(initialState, {
  [types.APP_NETWORK_STATUS](state, action) {
    return {
      ...state,
      networkStatus: action.networkStatus
    };
  }
});

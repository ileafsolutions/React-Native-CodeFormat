import * as types from "./types";

export function onChangeNetworkStatus(networkStatus) {
  return {
    type: types.APP_NETWORK_STATUS,
    networkStatus
  };
}

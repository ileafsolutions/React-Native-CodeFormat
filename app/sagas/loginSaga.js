/**
 * Created by ILeaf solutions
 * on July 03, 2019
 * LoginSaga - Handles login saga methods.
 */

// import Strings from "../config/stringFile";
// import * as common from "../config/common";
// import { loginUser } from "../api/apiMethods";
// import { put, call, select } from "redux-saga/effects";
// import * as loginActions from "../actions/loginActions";
// import * as loadingActions from "../actions/loadingActions";
// import * as navigationActions from "../actions/navigationActions";

export default function* loginSaga(actions) {
  //   const { isNetworkAvailable } = yield select(state => state.appReducer);
  //   if (!isNetworkAvailable) {
  //     common.showSingleAlert(Strings.NO_INTERNET_CONNECTION);
  //     return;
  //   }
  //   yield put(loadingActions.enableLoader());
  //   try {
  //     let response = yield call(loginUser, actions.username, actions.password);
  //     console.log("RESPONSE ==", response);
  //     yield put(loadingActions.disableLoader({}));
  //     if (response.status) {
  //       common.showSnackBarErrorAlert(Strings.LOGIN_FAILD);
  //       yield call(navigationActions.navigateToLogin);
  //     } else {
  //       yield put(loginActions.onLoginResponse(response));
  //       yield call(navigationActions.navigateToHome);
  //     }
  //   } catch (e) {
  //     console.log("ERRORR!!!!", e);
  //     yield put(loadingActions.disableLoader({}));
  //     common.showSnackBarErrorAlert(Strings.API_FAILED);
  //   }
}

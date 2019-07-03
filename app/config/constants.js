/**
 * Created by ILeaf solutions
 * on July 03, 2019
 * Constants - Constant data of the App.
 */

import { Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export default (constants = {
  APP_NAME: "App Name",

  font: {
    bold: Platform.OS === "ios" ? "GoogleSans-Bold" : "GoogleSans Bold",
    medium: Platform.OS === "ios" ? "GoogleSans-Medium" : "GoogleSans Medium",
    regular: Platform.OS === "ios" ? "GoogleSans-Regular" : "GoogleSans Regular"
  },

  PRIVACY_POLICY_URL: "",
  TERMS_AND_CONDITIONS_URL: "",

  APP_TEXT_INPUT_PLACEHOLDER_COLOR: "rgb(119,128,138)",
  APP_THEME_COLOR: "rgb(51,133,182)",
  APP_THEME_DARK_COLOR: "rgb(51,101,138)",
  APP_BLACK_COLOR: "#000000",
  APP_WHITE_COLOR: "#FFFFFF",
  APP_DARK_GRAY_COLOR: "rgb(87,87,87)",
  APP_GRAY_COLOR: "rgb(177,177,177)",
  APP_BLUE_COLOR: "#33658A",
  APP_NAVIGATION_TITLE_COLOR: "",
  APP_SEPARATOR_COLOR: "#E7E6E6",

  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,

  ACTIVE_OPACITY: 0.5,

  IS_ANDROID: Platform.OS === "ios" ? false : true,
  NETWORK_TIME_OUT: 1000 * 60,
});

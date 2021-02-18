/**
 * Created by iLeaf
 * created on Aug 27, 2019
 * updated on Feb 18, 2021
 * Entrypoint - Everthing starts from the entrypoint.
 */

import Navigator from "./navigation";
import { Provider } from "react-redux";
import React, { useState, useEffect } from "react";
import configureStore from "./store/configureStore";
import { PersistGate } from "redux-persist/es/integration/react";
import { ActivityIndicator, Text, TextInput } from "react-native";
const { persistor, store } = configureStore();

export default function Entrypoint() {
  useEffect(() => {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = false;
  });

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
}

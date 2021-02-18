import React, { Component } from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import styles from "./styles";

export default function DrawerComponent() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar backgroundColor="#005776" barStyle="light-content" />
      <View />
    </SafeAreaView>
  );
}

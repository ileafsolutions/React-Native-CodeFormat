/**
 * NavigationHeader - Navigation header component.
 */

import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import styles from "./styles";

export default function NavigationHeader(props) {
  return (
    <View>
      {/* <StatusBar backgroundColor="powderblue" barStyle="light-content" /> */}
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.titleText} onPress={props.drawerPress}>
            Drawer
          </Text>
        </View>
      </View>
    </View>
  );
}

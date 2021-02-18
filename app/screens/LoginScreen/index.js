import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import styles from "./styles";

export default function LoginScreen(props) {
  const onPress = () => {
    props.navigation.navigate("DrawerStack");
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar backgroundColor="#005776" barStyle="light-content" />
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Text>Navigate To Home Page</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

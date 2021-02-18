import React, { Component } from "react";
import { View, SafeAreaView } from "react-native";
import styles from "./styles";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";

export default function HomeScreen(props) {
  const drawerPress = () => {
    props.navigation.openDrawer();
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.safeContainer}>
        <NavigationHeader title={"HOME"} drawerPress={drawerPress} />
        <View style={styles.container} />
      </View>
    </SafeAreaView>
  );
}

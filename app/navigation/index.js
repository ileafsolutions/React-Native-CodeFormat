import {
  createAppContainer,
  createSwitchNavigator,
  createCompatNavigatorFactory,
} from "@react-navigation/compat";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import React, { Component } from "react";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import DrawerComponent from "../components/DrawerComponent/DrawerComponent";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerComponent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen
        name="LoginScreen"
        component={LoginScreen}
      ></RootStack.Screen>
      <RootStack.Screen
        name="DrawerStack"
        component={MyDrawer}
      ></RootStack.Screen>
    </RootStack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}
export default App;

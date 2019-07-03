/**
 * Created by ILeaf solutions
 * on July 03, 2019
 * NavigationStack - Navigation screens configurations.
 */

import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

import Login from "../screens/Login";

const LoginStack = createStackNavigator(
  {
    Login: { screen: Login }
  },
  { headerMode: "none" }
);

const switchNavigator = createSwitchNavigator(
  {
    Login: LoginStack
  },
  { headerMode: "none", initialRouteName: "Login" }
);

const App = createAppContainer(switchNavigator);

export default App;

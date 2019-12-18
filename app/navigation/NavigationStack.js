import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PreLoaderScreen from '../screens/PreLoaderScreen';
import Metrics from '../config/metrics';
import DrawerComponent from '../components/DrawerComponent/DrawerComponent';

const DrawerHomeApp = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {header: null, gesturesEnabled: false},
    },
  },
  {
    drawerWidth: Metrics.screenWidth - 70,
    drawerBackgroundColor: 'transparent',
    drawerPosition: 'left',
    contentComponent: DrawerComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

const DrawerStack = createStackNavigator({
  DrawerHomeApp: {
    screen: DrawerHomeApp,
    navigationOptions: {header: null, gesturesEnabled: false},
  },
});

const LoginStack = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
  },
  {headerMode: 'none'},
);
const switchNavigator = createSwitchNavigator(
  {
    PreLoaderScreen: PreLoaderScreen,
    DrawerStack: DrawerStack,
    LoginScreen: LoginStack,
  },
  {headerMode: 'none', initialRouteName: 'PreLoaderScreen'},
);
const App = createAppContainer(switchNavigator);
export default App;

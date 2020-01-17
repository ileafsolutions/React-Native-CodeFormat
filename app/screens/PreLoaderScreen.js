import { View } from "react-native";
import { connect } from "react-redux";
import React, { Component } from "react";
import NetInfo from "@react-native-community/netinfo";
import * as appActions from "./../actions/appActions";

// import SplashScreen from 'react-native-splash-screen';

class PreLoaderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // setTimeout(function() {
    //   SplashScreen.hide();
    // }, 3000);
    this._checkAppIntroStatus();

    this.unsubscribe = NetInfo.addEventListener(state => {
      this._handleConnectivityChange(state);
    });
  }

  //Method to check whether user logged in or not.
  _checkAppIntroStatus() {
    const { token } = this.props.loginReducer;
    if (token.length > 0) {
      this.props.navigation.navigate("HomeScreen");
    } else {
      this.props.navigation.navigate("LoginScreen");
    }
  }

  _handleConnectivityChange = state => {
    let networkStatus = state.isConnected;
    this.props.onChangeNetworkStatus(networkStatus);
  };

  render() {
    return <View />;
  }
}

function mapStateToProps(state) {
  return {
    loginReducer: state.loginReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeNetworkStatus: networkStatus => {
      dispatch(appActions.onChangeNetworkStatus(networkStatus));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreLoaderScreen);

import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './styles';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPress = () => {
    // this.props.navigateToHomeScreen();
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar backgroundColor="#005776" barStyle="light-content" />
        <View style={styles.container}>
          <TouchableOpacity onPress={this.onPress}>
            <Text>Navigate To Home Page</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;

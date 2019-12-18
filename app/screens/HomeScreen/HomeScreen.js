import React, {Component} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  drawerPress = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.safeContainer}>
          <NavigationHeader title={'HOME'} drawerPress={this.drawerPress} />
          <View style={styles.container} />
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

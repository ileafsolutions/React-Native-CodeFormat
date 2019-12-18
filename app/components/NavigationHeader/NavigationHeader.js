/**
 * NavigationHeader - Navigation header component.
 */

import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import styles from './styles';

class NavigationHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor="red" barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.titleText} onPress={this.props.drawerPress}>Drawer</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default NavigationHeader;

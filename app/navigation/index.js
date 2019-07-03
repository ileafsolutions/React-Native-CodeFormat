/**
 * Created by ILeaf solutions
 * on July 03, 2019
 * AppNavigator - Navigation index.
 */

import React, { Component } from "react";
import NavigationStack from "./NavigationStack";
import NavigationService from "./NavigationService";

class AppNavigator extends Component {
  render() {
    return (
      <NavigationStack
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

export default AppNavigator;

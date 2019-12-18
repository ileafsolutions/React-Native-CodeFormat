import React, {Component} from 'react';
import LoginScreen from './LoginScreen';
import {connect} from 'react-redux';
import * as navigationActions from '../../actions/navigationActions';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <LoginScreen {...this.props} />;
  }
}

function mapStateToProps() {
  return {};
}
function mapDispatchToProps() {
  return {
    navigateToHomeScreen: () => {
      navigationActions.navigateToHomeScreen;
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);

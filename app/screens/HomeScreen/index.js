import React, {Component} from 'react';
import HomeScreen from './HomeScreen';
import {connect} from 'react-redux';
import * as navigationActiona from '../../actions/navigationActions';

class HomeScreenContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <HomeScreen {...this.props} />;
  }
}

function mapStateToProps() {
  return {};
}
function mapDispatchToProps() {
  return {};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreenContainer);

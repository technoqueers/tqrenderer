import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';

class HomePage extends Component {
  static mapStateToProps(state, ownProps) {
    return {
      rendering: state.rendering
    };
  }

  render() {
    return (
      <Home rendering={this.props.rendering} />
    );
  }
}

export default connect(
  HomePage.mapStateToProps, {}
)(HomePage);

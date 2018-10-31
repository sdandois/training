import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import * as actionCreators from '../../../actions';
import { Button } from '../../../common';

import styles from './styles';
import { BUTTON_DELETE_TEXT } from './constants';

const Footer = props => (
  <View style={styles.view}>
    <Button style={styles.button} onPress={props.removeCompleted}>
      {BUTTON_DELETE_TEXT}
    </Button>
  </View>
);

const mapDispatchToProps = dispatch => ({
  removeCompleted: () => {
    dispatch(actionCreators.removeCompleted());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Footer);

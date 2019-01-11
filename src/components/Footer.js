import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import * as actionCreators from '../actions';

import { Button } from './common/Button';
import styles from './styles/footer';
import { BUTTON_DELETE_TEXT } from './constants';

const Footer = props => (
  <View style={styles.view}>
    <Button onPress={props.removeCompleted}>{BUTTON_DELETE_TEXT}</Button>
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

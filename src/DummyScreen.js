import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles/dummy';
import { dummyNavOptions } from './constants/navigationOptions';

class DummyScreen extends Component {
  static navigationOptions = dummyNavOptions

  render() {
    return (
      <View style={styles.view}>
        <Text> Otra Screen </Text>
      </View>
    );
  }
}

export default DummyScreen;


import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles/dummy';

class DummyScreen extends Component {
  static navigationOptions = {
    title: 'Dummy'
  };

  render() {
    return (
      <View style={styles.view}>
        <Text> Otra Screen </Text>
      </View>
    );
  }
}

export default DummyScreen;


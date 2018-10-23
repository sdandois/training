import React, { Component } from 'react';
import { Text, View } from 'react-native';

import BookList from './components/BookList';
import styles from './styles/dummy.js'

class DummyScreen extends Component {
  static navigationOptions = {
    title: 'Dummy'
  };

  render() {
    return (
      <View style={styles.view}>
        <BookList />
      </View>
    );
  }
}

export default DummyScreen;

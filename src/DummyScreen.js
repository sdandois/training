import React, { Component } from 'react';
import { Text, View } from 'react-native';

import BookList from './components/BookList';

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
  };

}

const styles = {
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default DummyScreen;
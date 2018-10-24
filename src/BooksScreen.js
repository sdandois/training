import React, { Component } from 'react';
import { Text, View } from 'react-native';

import BookList from './components/BookList';
import styles from './styles/booksScreen.js'

class BooksScreen extends Component {
  static navigationOptions = {
    title: 'Books'
  };

  render() {
    return (
      <View style={styles.view}>
        <BookList />
      </View>
    );
  }
}

export default BooksScreen;

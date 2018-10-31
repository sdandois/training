import React, { Component } from 'react';
import { View } from 'react-native';

import BookList from './components/BookList/BookList';
import styles from './styles/booksScreen';
import { booksNavOptions } from './constants/navigationOptions';

class BooksScreen extends Component {
  static navigationOptions = booksNavOptions;

  render() {
    return (
      <View style={styles.view}>
        <BookList />
      </View>
    );
  }
}

export default BooksScreen;

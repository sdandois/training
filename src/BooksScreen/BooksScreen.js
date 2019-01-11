import React, { Component } from 'react';
import { View } from 'react-native';

import BookList from './components/BookList/BookList';
import styles from './styles';
import { booksNavOptions } from './constants';

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

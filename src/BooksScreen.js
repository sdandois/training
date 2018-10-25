import React, { Component } from 'react';
import { View } from 'react-native';

import BookList from './components/BookList';
import styles from './styles/booksScreen';

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

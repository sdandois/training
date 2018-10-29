import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles/bookDetailScreen';

class BookDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('book', {}).title
  });

  render() {
    const book = this.props.navigation.getParam('book', {});

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.label}>Author:</Text>
          <Text style={styles.content}>{book.author}</Text>
        </View>
      </View>
    );
  }
}

export default BookDetailScreen;

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles/bookDetailScreen';
import itemStyles from './components/styles/bookItem';

class BookDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('book', {}).title
  });

  render() {
    const book = this.props.navigation.getParam('book', {});

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={itemStyles.authorLabel}>Author:</Text>
          <Text style={styles.label}>{book.author}</Text>
        </View>
      </View>
    );
  }
}

export default BookDetailScreen;

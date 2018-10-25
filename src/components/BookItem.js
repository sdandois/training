import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles/bookItem';

const BookItem = ({ book }) => (
  <View style={styles.viewContainer}>
    <Image style={styles.thumbnail} source={book.thumbnail} />
    <View style={styles.viewLabels}>
      <Text style={styles.authorLabel}>{book.title}</Text>
      <Text>{book.author}</Text>
    </View>
  </View>
);

export default BookItem;

import React, { Component } from 'react';
import { View, Text, Switch , Image} from 'react-native';
import { connect } from 'react-redux';

import { Button } from './common/Button';
import { toggleDone, removeTodo } from '../actions';
import styles from './styles/bookItem.js';


const BookItem = ( {book}) => {
  return (
    <View style={styles.viewContainer}>
      <Image
        style={styles.thumbnail}
        source={book.thumbnail}
      />
      <View style={styles.viewLabels}>
        <Text style={styles.authorLabel}>{book.title}</Text>
        <Text>{book.author}</Text>
      </View>
    </View>
  );
};

export default BookItem;


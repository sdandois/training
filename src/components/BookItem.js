import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { connect } from 'react-redux';

import { Button } from './common/Button';
import { toggleDone, removeTodo } from '../actions';
import styles from './styles/bookItem.js';


const BookItem = ( {book}) => {
  return (
    <View style={styles.viewContainer}>
      <Text> {book.title} </Text>
    </View>
  );
};

export default BookItem;


import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { connect } from 'react-redux';

import { Button } from './common/Button';
import { toggleDone, removeTodo } from '../actions';



const BookItem = ( {book}) => {
  return (
    <View style={styles.viewContainer}>
     <Text> {book.title} </Text>
    </View>
  );
};


const styles = {
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },
  viewChecks: {
    flexDirection: 'row'
  }
};

export default BookItem;

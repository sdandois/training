import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStore } from 'redux';

import Footer from './components/Footer';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import styles from './styles/base'; 


class TodoScreen extends Component { 
  static navigationOptions = {
    title: 'ToDo\'s List'
  };

  render() {
    return (
      <View style={styles.container}>
        <InputTodo />
        <TodoList />
        <Footer />
      </View>
    );
  }
}

export default TodoScreen;


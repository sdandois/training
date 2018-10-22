import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Footer from './components/Footer';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';


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

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    
  }
};

const TODO_SCREEN_TITLE = 'ToDo\'s List';

export default TodoScreen;

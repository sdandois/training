import React, { Component } from 'react';
import { View } from 'react-native';

import Footer from './components/Footer/Footer';
import InputTodo from './components/InputTodo/InputTodo';
import TodoList from './components/TodoList/TodoList';
import styles from './styles';
import { todoNavOptions } from './constants';

class TodoScreen extends Component {
  static navigationOptions = todoNavOptions;

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

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Footer from './components/Footer';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';

export default class App extends Component { 
  render() {
    return (
      <View style={styles.container}>
        <Header/>
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

import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Footer from './components/Footer';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import reducers from './reducers';

import styles from './components/styles/base.js';

export default class App extends Component { 
  render() {
    return (
      <Provider store={createStore(reducers)} >
      <View style={styles.container}>
        <Header />
        <InputTodo />
        <TodoList />
        <Footer />
      </View>
      </Provider>
    );
  }
}


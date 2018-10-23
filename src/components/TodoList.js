import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';
import styles from './styles/todoList.js';

class TodoList extends Component {
  renderItem = ({ item }) => <TodoItem todo = { item } />;
  keyExtractor = ( item ) => item.id.toString();

  render () {
    return (
      <View style = { styles.view } >
        <FlatList
          data = { this.props.todos }
          renderItem = { this.renderItem }
          keyExtractor = { this.keyExtractor }
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos:state.todosStore.todos
});

export default connect( mapStateToProps )( TodoList );


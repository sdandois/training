import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';
import styles from './styles/todoList';

class TodoList extends Component {
  keyExtractor = item => item.id.toString();
  renderItem = ({ item }) => <TodoItem todo={item} />;

  render() {
    return (
      <View style={styles.view}>
        <FlatList data={this.props.todos} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todosStore.todos
});

export default connect(mapStateToProps)(TodoList);

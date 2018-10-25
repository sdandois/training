import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { connect } from 'react-redux';

import * as actionCreators from '../actions';

import { Button } from './common/Button';
import styles from './styles/todoItem';

class TodoItem extends Component {
  toggleDone = () => this.props.toggleDone(this.props.todo.id);
  removeTodo = () => this.props.removeTodo(this.props.todo.id);

  color() {
    if (this.props.todo.done) {
      return {
        backgroundColor: '#BBB'
      };
    }

    return {
      backgroundColor: '#FFF'
    };
  }

  render() {
    return (
      <View style={[styles.viewContainer, this.color()]}>
        <Text>{this.props.todo.text}</Text>
        <View style={styles.viewChecks}>
          <Switch value={this.props.todo.done} onValueChange={this.toggleDone.bind(this)} />
          <Button color="tomato" onPress={this.removeTodo.bind(this)}>
            X
          </Button>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleDone: id => {
    dispatch(actionCreators.toggleDone(id));
  },
  removeTodo: id => {
    dispatch(actionCreators.removeTodo(id));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(TodoItem);

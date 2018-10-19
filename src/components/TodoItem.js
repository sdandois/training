import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { connect } from 'react-redux';

import { Button } from './common/Button';
import { toggleDone, removeTodo } from '../actions';

class TodoItem extends Component {
  toggleDone () {
    this.props.toggleDone(this.props.todo.id);
  }

  removeTodo () {
    this.props.removeTodo(this.props.todo.id);
  }

  color () {
    if (this.props.todo.done) {
      return {
        backgroundColor: '#BBB'
      };
    }

    return {
      backgroundColor: '#FFF'
    };
  }

  render () {
    return (
      <View style = {[ styles.viewContainer, this.color() ]}>
        <Text>
          { this.props.todo.text }
        </Text>
        <View style = { styles.viewChecks } >
          <Switch
            value = { this.props.todo.done }
            onValueChange = { this.toggleDone.bind(this) }
          />
          <Button
            color = 'tomato'
            onPress = { this.removeTodo.bind(this) }
          >
            X
          </Button>
        </View>
      </View>
    );
  }
}

const styles = {
  viewContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:5
  },
  viewChecks: {
    flexDirection:'row'
  }
};

export default connect(null, { toggleDone, removeTodo })( TodoItem );

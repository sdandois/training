import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actionCreators from '../../../actions';
import { Button } from '../../../common';

import styles from './styles';

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
        <Text style={styles.todoLabel}>{this.props.todo.text}</Text>
        <View style={styles.viewChecks}>
          <Switch value={this.props.todo.done} onValueChange={this.toggleDone} />
          <Button color="tomato" onPress={this.removeTodo}>
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

TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string,
    done: PropTypes.bool,
    id: PropTypes.number
  })
};

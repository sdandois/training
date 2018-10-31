import React from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';

import * as actionCreators from '../../../actions';

import { PLACE_HOLDER } from './constants';
import styles from './styles';

const InputTodo = props => (
  <View style={styles.view}>
    <TextInput
      style={styles.input}
      placeholder={PLACE_HOLDER}
      onSubmitEditing={props.addTodo}
      onChangeText={props.changeInput}
      value={props.inputText}
    />
  </View>
);

const mapStateToProps = state => ({ inputText: state.todosStore.inputText });

const mapDispatchToProps = dispatch => ({
  changeInput: text => {
    dispatch(actionCreators.changeInput(text));
  },
  addTodo: () => {
    dispatch(actionCreators.addTodo());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputTodo);

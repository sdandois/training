import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';

import  * as actionCreators from '../actions';
import { PLACE_HOLDER } from './constants';
import styles from './styles/inputTodo';

class InputTodo extends Component {
  render(){
    return (
      <View style={styles.view} >
        <TextInput
          style={styles.input}
          placeholder={PLACE_HOLDER}
          onSubmitEditing={this.props.addTodo}
          onChangeText={this.props.changeInput}
          value={this.props.inputText}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { inputText:state.todosStore.inputText };
};

const mapDispatchToProps = (dispatch) => ({
  changeInput: (text) => {
    dispatch(actionCreators.changeInput(text));
  },
  addTodo:  () => {
    dispatch(actionCreators.addTodo());
  }
});

export default connect( mapStateToProps, mapDispatchToProps )( InputTodo );


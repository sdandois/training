import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { changeInput, addTodo  } from '../actions';

class InputTodo extends Component {
  render(){
    return (
      <View style = { styles.view } >
        <TextInput
          style = { styles.input }
          placeholder = { PLACE_HOLDER }
          onSubmitEditing = { this.props.addTodo }
          onChangeText = { this.props.changeInput }
          value = { this.props.inputText }
        />
      </View>
    );
  }

}

const styles = {
  view:{
    backgroundColor: '#EEE'
  },
  input: {
    color: '#000',
    margin:5,
    fontSize: 20,
  }
};

const PLACE_HOLDER = 'Enter a item...';

const mapStateToProps = state => {
  return { inputText:state.todosStore.inputText };
};

export default connect( mapStateToProps, { changeInput, addTodo } )( InputTodo );

import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux'; 

import TodoItem from './TodoItem';

class TodoList extends Component {
  renderItem({item}) {
    return ( <TodoItem todo = { item } /> );
  }

  keyExtractor(item) {
    return item.id.toString();
  }

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

const styles = {
  view:{
    flex:1
  }
};

const mapStateToProps = state => {
  return {
    todos:state.todos
  };
};

export default connect( mapStateToProps )( TodoList );

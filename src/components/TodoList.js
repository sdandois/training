import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import TodoItem from './TodoItem';

class TodoList extends Component {
  render () {
    return (
      <View style={styles.view}>
        <FlatList 
          data = {dummyData}
          renderItem = { ({item}) => <TodoItem todo={item} />}
          keyExtractor = { (item) => item.id.toString()}
        
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

const dummyData = [
  {text:'Lavar los platos', done:false, id:1},
  {text:'Hacer la tarea', done:true, id:2}
];

export default TodoList;

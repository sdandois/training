import React from 'react';
import {View, Text, Switch} from 'react-native';

import { Button } from './common/Button';


const TodoItem = ({todo}) => {
  
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.label}> {todo.text }</Text>
      <View style={styles.viewChecks}> 
        <Switch/>
        <Button color='tomato'>X</Button>
      </View>
    </View>
  );
};

const styles = {
  viewContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    padding:5
  },
  label: {
      
  },
  viewChecks: {
    flexDirection:'row'
  }
};

export default TodoItem;

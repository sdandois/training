import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from './common/Button';
import { connect } from 'react-redux'; 

import { removeCompleted } from '../actions';


class Footer extends Component {
  render(){
    return (
      <View style={styles.view}>
        <Button onPress={this.props.removeCompleted}> 
          {BUTTON_DELETE_TEXT} 
        </Button>
      </View>
    );
  }
}

const styles = {
  view:{
    height:80,
    position:'relative',
    padding:10,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#EEE'
  }
};

const BUTTON_DELETE_TEXT = 'Remove Completed';

export default connect(null , {removeCompleted})( Footer );

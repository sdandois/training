import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from './common/Button';
import { connect } from 'react-redux'; 

import { removeCompleted } from '../actions';
import styles from './styles/footer.js';
import { BUTTON_DELETE_TEXT } from './constants.js';


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


export default connect(null , {removeCompleted})( Footer );

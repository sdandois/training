import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import { Input } from './common';





class InputTodo extends Component {
    render(){
        return (
            <View style={styles.view} >
                <TextInput placeholder={PLACE_HOLDER} style={styles.input} />
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
        paddingRight: 5,
        paddingLeft: 5,
        margin:5,
        fontSize: 18,
        lineHeight: 23
    }
};

const PLACE_HOLDER = 'Enter a item...';

export default InputTodo;
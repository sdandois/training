import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from './common/Button';


const Header = (props) => {
    return (
        <View style={styles.view}>
            <Button> {BUTTON_DELETE_TEXT} </Button>
        </View>
    );
}

const styles = {
    view:{
        height:80,
        position:'relative',
        padding:10,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
}

const BUTTON_DELETE_TEXT = "Remove Completed";

export default Header;
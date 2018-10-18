
import React, { Component } from 'react';
import { View, Text } from 'react-native';



const Header = (props) => {
    return (
        <View style={styles.view}>
            <Text style={styles.fontSize}>{HEADER_TEXT}</Text>
        </View>
    );
}

const styles = {
    view:{
        flexDirection:'row',
        height:60,
        position:'relative',
        paddingTop:20,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'cyan'
    },
    text: {
        fontSize:40, 
    }
}

const HEADER_TEXT = "Todo List";

export default Header;

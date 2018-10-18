import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, color='#007aff' }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, {borderColor:color}]}>
      <Text style={[textStyle, {color: color}]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    padding: 10,
  },
  buttonStyle: {
    alignSelf: 'stretch',
    justifyContent:'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };

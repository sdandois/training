import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles/button.js';

const Button = ({ onPress, style, children, color='#007aff' }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={ onPress } style={[ buttonStyle, style, { borderColor:color } ]}>
      <Text style={[ textStyle, { color } ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };

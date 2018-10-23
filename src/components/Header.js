import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { HEADER_TEXT } from './constants';
import styles from './styles/header.js';


const Header = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.fontSize}>{HEADER_TEXT}</Text>
    </View>
  );
};

export default Header;


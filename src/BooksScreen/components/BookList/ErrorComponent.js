import React from 'react';
import { View, Text } from 'react-native';

import { Button } from '../../../common';

import styles from './styles';
import { ERROR_TEXT, ERROR_BUTTON_TEXT } from './constants';

const ErrorComponent = ({onPress}) => (
  <View style={styles.centered}>
    <Text style={styles.label}>{ERROR_TEXT}</Text>
    <Button onPress={onPress}>{ERROR_BUTTON_TEXT}</Button>
  </View>
);

export default ErrorComponent;

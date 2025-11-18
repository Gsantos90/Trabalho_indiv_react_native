import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: any;
};

const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

import styles from './style';

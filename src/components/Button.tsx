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

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#222',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 8,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#888"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 10,
    borderRadius: 6,
    fontSize: 16,
  },
});

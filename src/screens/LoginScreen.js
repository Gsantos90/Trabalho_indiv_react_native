import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import Input from '../components/Input';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Crunchyroll</Text>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>Endereço de E-mail</Text>
      <Input
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text style={styles.label}>Senha</Text>
      <Input
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity>
        <Text style={styles.forgot}>ESQUECEU A SENHA?</Text>
      </TouchableOpacity>
      <Button
        title="LOGIN"
        onPress={() => navigation.navigate('Home')}
        style={styles.loginButton}
      />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 24,
    justifyContent: 'center',
  },
  logo: {
    color: '#ff8000',
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 32,
  },
  label: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 8,
    marginTop: 16,
  },
  forgot: {
    color: '#fff',
    marginTop: 8,
    marginBottom: 24,
    fontWeight: 'bold',
  },
  loginButton: {
    marginBottom: 24,
  },
  back: {
    color: '#ff8000',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
  },
});

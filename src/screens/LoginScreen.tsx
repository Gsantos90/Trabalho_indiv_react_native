import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import styles from './LoginScreen.style';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Crunchyroll</Text>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>Endereço de E-mail</Text>
      <Input
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
       
      />
      <Text style={styles.label}>Senha</Text>
      <Input
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        
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
};

export default LoginScreen;

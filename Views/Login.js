import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import LoginViewModel from '../ViewModels/LoginViewModel'; // Asumiendo que este archivo existe

export default function Login({ navigation }) {
  const { username, setUsername, password, setPassword, handleLogin } = LoginViewModel(navigation);

  return (
    <View style={styles.container}>
      <TextInput label="Username" value={username} onChangeText={setUsername} style={styles.input} />
      <TextInput label="Password" value={password} onChangeText={setPassword} secureTextEntry={true} style={styles.input} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
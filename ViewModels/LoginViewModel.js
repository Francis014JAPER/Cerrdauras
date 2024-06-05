import { useState } from 'react';
import UserModel from '../models/UserModel';

export default function LoginViewModel(navigation) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = new UserModel(username, password);
    console.log('User:', user);

    navigation.navigate('Home');
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
  };
}

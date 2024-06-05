import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Views/Login';
import Home from './Views/Home';
import LocksScreen from './Views/LocksScreen';
import LockDetailsScreen from './Views/LockDetailsScreen';
import EditLockScreen from './Views/EditLockScreen'; // Importar el nuevo componente

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Locks" component={LocksScreen} />
        <Stack.Screen name="LockDetails" component={LockDetailsScreen} />
        <Stack.Screen name="EditLock" component={EditLockScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
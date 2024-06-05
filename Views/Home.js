import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const goToLocksScreen = () => {
    navigation.navigate('Locks'); // Corregido para navegar a la ruta correcta
  };

  return (
    <View style={styles.container}>
      <Button title="Ver Lista de Cerraduras" onPress={goToLocksScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
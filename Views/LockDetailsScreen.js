import React, { useState } from 'react';
import { View, Image, Text, Switch, Button, StyleSheet } from 'react-native';

const LockDetailsScreen = ({ route, navigation }) => {
    const { lockId, title, image, locks, setLocks } = route.params;
  const [isLockOpen, setIsLockOpen] = useState(false);

  const toggleSwitch = () => setIsLockOpen((prevState) => !prevState);

  const handleModify = () => {
    navigation.navigate('EditLock', {
      lockId: lockId,
      title: title,
      image: image,
    });
  };

  const handleDelete = () => {
    const updatedLocks = locks.filter((lock) => lock.id !== lockId);
    setLocks(updatedLocks);
    navigation.navigate('Locks');
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Cerradura:</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isLockOpen ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isLockOpen}
        />
        <Text style={styles.switchLabel}>{isLockOpen ? 'Abierta' : 'Cerrada'}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Modificar" onPress={handleModify} />
        <Button title="Eliminar" onPress={handleDelete} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  switchLabel: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default LockDetailsScreen;
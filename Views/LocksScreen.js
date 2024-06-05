import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import LockListItem from './components/LockListItem';

export default function LocksScreen({ navigation }) {
  const [locks, setLocks] = useState([
    { id: 1, title: 'Cerradura 1', image: require('../assets/icon.png') },
    { id: 2, title: 'Cerradura 2', image: require('../assets/splash.png') },
    // Agrega más datos de cerraduras según sea necesario
  ]);

  return (
    <View>
      <FlatList
        data={locks}
        renderItem={({ item }) => (
          <LockListItem
            title={item.title}
            image={item.image}
            onPress={() =>
              navigation.navigate('LockDetails', {
                lockId: item.id,
                title: item.title,
                image: item.image,
                locks: locks,
                setLocks: setLocks,
              })
            }
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
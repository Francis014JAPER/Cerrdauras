import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';

const EditLockScreen = ({ route, navigation }) => {
  const { lockId, title, image } = route.params;
  const [newTitle, setNewTitle] = useState(title);
  const [newImage, setNewImage] = useState(image);

  const handleSave = () => {
    // Lógica para guardar los cambios
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={newTitle}
        onChangeText={setNewTitle}
        placeholder="Ingresa el nuevo nombre"
      />
      <Image source={newImage} style={styles.image} />
      <Button title="Cambiar Imagen" onPress={() => {}} />
      <Button title="Guardar" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default EditLockScreen;
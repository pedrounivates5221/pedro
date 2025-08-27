import React from 'react';
import { StyleSheet, TextInput, Button, View, Text, Alert } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const [text, setText] = React.useState('');
  const [number, setNumber] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.label}>Digite um texto:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Digite algo"
        />
        <Text style={styles.label}>Digite um número:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNumber}
          value={number}
          placeholder="Digite um número"
          keyboardType="numeric"
        />
        <Button
          title="Mostrar valores"
          onPress={() => Alert.alert('Valores', `Texto: ${text}\nNúmero: ${number}`)}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  input: {
    height: 40,
    marginBottom: 16,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  label: {
    marginBottom: 4,
    fontSize: 16,
  },
});

export default App;
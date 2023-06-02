import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [ wheelItem, setWheelItem ] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyWheel App</Text>
      <TextInput
        style={styles.inputWheel}
        placeholder="Create a new wheel item"
        placeholderTextColor="#f9f9f9"
        onChangeText={v => setWheelItem(v)}
        defaultValue={wheelItem}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18191a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#f9f9f9',
    fontSize: 24,
    },
    inputWheel: {
        color: '#f9f9',
        fontSize: 18,
        borderColor: '#8888',
        marginTop: 18,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import WheelOfFortune from 'react-native-wheel-of-fortune';

export default function App() {
  const [ wheelItem, setWheelItem ] = useState('');
  const [ wheelItems, setWheelItems ] = useState([]);

  const [ raffleTask, setRaflleTask ] = useState('');

  const handleAddWheelItem = () => {
    if (wheelItem.length > 0) {
        const newWheelItem = {
            id: wheelItems.length + 1,
            description: wheelItem,
        };
        setWheelItems([ ...wheelItems, newWheelItem]);
        setWheelItem('');
    }
  };

    const handleRaflleTask = () => {
        if(wheelItems.length > 0) {
            const index = Math.floor(Math.random() * wheelItems.length);
            setRaflleTask(wheelItems[index].description);
        }
    }

    const handleRemoveTask = (id) => {
        setWheelItems((items) => {
            return items.filter((item) => item.id !== id)
        })
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyWheel App</Text>
      <TextInput
        style={styles.inputWheel}
        placeholder="Create a new wheel item"
        placeholderTextColor="#f9f9f9"
        onChangeText={item => setWheelItem(item)}
        value={wheelItem}
      />
      <Button title='Adicionar' onPress={handleAddWheelItem} />
      <FlatList
        style={styles.list}
        data={wheelItems}
        keyExtractor={item => item.id}
        renderItem={ ({item}) => (
            <View style={styles.listView}>
                <Text style={styles.listText}>{item.description}</Text>
                <Button title='X' onPress={() => handleRemoveTask(item.id)} />
            </View>
        )}
        />
        <Button title='Sortear' onPress={handleRaflleTask} />
        <Text style={styles.title} >{ raffleTask }</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#18191a',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        paddingTop: 150,
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
        width: '100%',
    },
    button: {
        padding: 16,
    },
    list: {
        paddingTop: 16,
        width: '100%',
    },
    listView : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    listText: {
        color: '#f9f9f9',
        fontSize: 24,
    }
});

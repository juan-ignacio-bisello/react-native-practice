import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FAB from './components/FAB';

export default function App() {

  const [count, setcount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={ styles.textHuge }>{ count }</Text>

      <FAB 
        label='+1' 
        onPress={ () => setcount( count + 1) } 
        onLongPress={ () => setcount( 0 ) } 
        position='right'
      />

      <FAB 
        label='0' 
        onPress={ () => setcount( 0 ) } 
        position='left'
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHuge: {
    fontSize: 120,
    fontWeight: '100'
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#65558F',
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    shadowRadius: 4
  }
});

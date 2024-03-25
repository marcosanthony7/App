import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Gato from './Gato';
import Cliques from './Cliques';

function App() {
  return (
    <View style={styles.container}>
      <Text>Lista de Gatos</Text>
      <Gato idade={16}/>
      <Gato idade={17}/>
      <Gato idade={17}/>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Gato from './Gato';
import Cliques from './Cliques';

function App() {
  return (
    <View style={styles.container}>
      <Text>Lista de Gatos</Text>
      <Gato nome="Black" idade={16}/>
      <Gato nome="Marcos" idade={17}/>
      <Gato nome="Arthur" idade={17}/>
      <StatusBar style="auto" />
    </View>
  );
}

export default Cliques;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

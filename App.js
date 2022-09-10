import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';  // view,text component

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My first react native!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet,Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Form from './src/components/Form';
import Login from './src/components/Login';
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Login/>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
  },
});

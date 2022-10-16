import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  const onpresshandler = () => {
    console.log(" I am clicked");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={onpresshandler} numberOfLines={3}>Hello World, {'\n'}
        <Button title='Click me'></Button>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
});

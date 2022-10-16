import { StyleSheet, Text, Button, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  const onpresshandler = () => {
    console.log(" I am clicked");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={onpresshandler} numberOfLines={3}>Hello World, {'\n'}
        <View>
          <Text style={styles.dummystyle}>I am text</Text>
        </View>

      </Text>
      <Button title='Click me'></Button>
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
  dummystyle: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'red',
  },
});

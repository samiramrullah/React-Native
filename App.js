import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input_button}>
        <TextInput style={styles.inputText} placeholder='Enter Goal' />
        <Button title='Add Goal'></Button>
      </View>
      <View>
        <Text style={styles.goal_list}>List Of Goals .......

        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%'
  },
  input_button: {
    flexDirection: 'row'

  },
  inputText: {
    width: '70%',
    borderWidth: 1,
    marginRight: 2,
  },
  goal_list: {
    marginTop: 5
  }
});

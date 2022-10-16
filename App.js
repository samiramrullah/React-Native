import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {
  const [goals, setgoals] = useState();
  const onEnterText = (entertext) => {
    setgoals(entertext);
  }
  const onAddHandler = () => {
    console.log(goals);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input_button}>
        <TextInput onChangeText={onEnterText} style={styles.inputText} placeholder='Enter Goal' />
        <Button onPress={onAddHandler} title='Add Goal'></Button>
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
    marginTop: '10%',
    flex: 1,
  },
  input_button: {
    flexDirection: 'row',
    marginBottom: 5,

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

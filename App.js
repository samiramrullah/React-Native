import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {
  const [goal, setgoal] = useState();
  const [allGoals, setAllGoals] = useState([]);
  const onEnterText = (entertext) => {
    setgoal(entertext);
  }
  const onAddHandler = () => {
    setAllGoals((currentGoals) => [
      ...currentGoals,
      goal
    ])
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input_button}>
        <TextInput onChangeText={onEnterText} style={styles.inputText} placeholder='Enter Goal' />
        <Button onPress={onAddHandler} title='Add Goal'></Button>
      </View>
      <View>
        <Text style={styles.goal_list}>
          {allGoals?.map((itm) => <Text key={itm}>{itm}</Text>)}
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
    marginTop: 5,
    flex: 5,
    flexDirection: 'column'
  }
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  const onpresshandler = () => {
    console.log(" I am clicked");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={onpresshandler} numberOfLines={7}>Hello World,
        Student at Punjab Engineering College , Chandigarh.
        Pursuing B. Tech in Computer Science and Engineering (2019-2023). Enthusiastic and Friendly.
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

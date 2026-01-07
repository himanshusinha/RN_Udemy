import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder="Your course goals" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals ...</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  appContainer: {
    padding: 70,
  },
});
export default App;

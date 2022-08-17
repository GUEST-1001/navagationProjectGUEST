import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function FirstPage({ navigation }) {

  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ThaiNichi Institute of Techonolohgy</Text>
      <Text style={styles.textStyle}>
        Plese insert your name to pass it to second screen
      </Text>
      <TextInput
        style={{
          justifyContent: "center",
          backgroundColor: "#D6D6D6",
          height: 40,
          width: "80%",
          marginBottom: 10,
        }}
        placeholder="Insert Your Name"
        onChangeText={(input) => (setText(input))}
      />
      <Button title="go next" 
      onPress={() => navigation.navigate('Second Page', {text})}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
});

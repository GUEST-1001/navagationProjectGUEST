import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function FirstPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ThaiNichi Institute of Techonolohgy</Text>
      <Text style={styles.textStyle}>Plese insert your name to pass it to second screen</Text>
      <TextInput style={{justifyContent:'center', backgroundColor:'gray'}} placeholder="Insert Your Name"/>
      <Button title="go next"/>
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

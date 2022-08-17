import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function SecondPage({ route }) {
  const { text } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ThaiNichi Institute of Techonolohgy</Text>
      <Text style={styles.textStyle}>
        Value passed from First page: {text}
      </Text>
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

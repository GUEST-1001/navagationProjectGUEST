import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function FirstPage() {
  return (
    <View>
      <Text>FirstPage</Text>
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

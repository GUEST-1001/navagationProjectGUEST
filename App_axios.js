import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import axios from "axios";

const App = () => {
  const getDetaUsingAxios = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      alert(JSON.stringify(response.data));
    } catch (error) {
      //error
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Example of axios in Reace Native</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={getDetaUsingAxios}>
        <Text>Get Date using axios get</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "100%",
    marginTop: 16,
  },
});

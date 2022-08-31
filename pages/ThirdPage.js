import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

import styles from "../components/style";

const ThirdPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.textTopStyle}>This Is Third Page</Text>
        <Button
          title="go to first page"
          onPress={() => navigation.navigate("First Page")}
        />
        <Button
          title="go to second page"
          onPress={() => navigation.navigate("Second Page")}
        />
      </View>
      <Text style={styles.textBottomSytel}>
        thai-nichi institute of technology
      </Text>
    </View>
  );
};

export default ThirdPage;

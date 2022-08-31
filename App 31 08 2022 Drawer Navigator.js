import { StatusBar } from "expo-status-bar";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import React from "react";

function HomeScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
      <Button
        title="go to notifications"
        onPress={() => navigation.navigate('Notification')}
      />
    </View>
  );
}

function Notification({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="go back home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

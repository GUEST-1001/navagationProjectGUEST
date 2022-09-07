import { StatusBar } from "expo-status-bar";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";

import { NavigationContainer ,DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import React from "react";

const myTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'rgb(255,45,85)'
  }
}

function FeedScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Feed Screen</Text>
      <Button
      title="open drawer"
      onPress={() => navigation.openDrawer()} />
      <Button
      title="toggle Drawer"
      onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function ArticleScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Article Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="close Drawer" onPress={() => props.navigation.closeDrawer()} />
      <DrawerItem label="open Drawer" onPress={() => props.navigation.openDrawer()} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle:{
          width:240
        }
      }}
    >
      <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Article" component={ArticleScreen} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer  theme={myTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;

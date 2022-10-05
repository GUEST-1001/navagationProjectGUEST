import { StatusBar } from "expo-status-bar";
import { Text, View, Button, TextInput, StyleSheet, Image } from "react-native";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";

import React from "react";
import { SafeAreaView } from "react-native-web";

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255,45,85)",
  },
};

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        style={styles.sideMenuProfileIcon}
        source={require("./assets/react_logo.png")}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="close Drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();
function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0096da",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Product" component={ProductStack} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer theme={myTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
});

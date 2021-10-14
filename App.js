import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "./screens/Home";
import { List } from "./screens/List";

const Drawer = createDrawerNavigator();

function DrawerScreens() {
  return (
    <Drawer.Navigator initialRouteName="List">
      <Drawer.Screen name="List" component={List} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Drawer" component={DrawerScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

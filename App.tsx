import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "./screens/Home";
import Camera from "./screens/Camera";
import { List } from "./screens/List";
import { Detail } from "./screens/Detail";
import { Contact } from "./screens/Contact";

const Drawer = createDrawerNavigator();

function ListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ListStack">
        <Drawer.Screen name="ListStack" component={ListStack} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./screens/Homescreen.js";
import DetailScreen from "./screens/Detailscreen.js";
import ListScreen from "./screens/Listscreen.js";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function List() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Listsc"
        component={ListScreen}
        options={{ title: "List Items" }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerType="slide">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          // options={{ title: "Homepage", gestureEnabled: false }}
        />
        <Drawer.Screen name="List" component={List} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

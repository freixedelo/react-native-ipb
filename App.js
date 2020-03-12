import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/Homescreen.js";
import DetailScreen from "./screens/Detailscreen.js";
import ListScreen from "./screens/Listscreen.js";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Listsc" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

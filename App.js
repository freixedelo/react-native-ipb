import React from 'react';
import { ActivityIndicator, Alert, Button, FlatList, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/Homescreen.js'
import DetailScreen from './screens/Detailscreen.js'
import ListScreen from './screens/Listscreen.js'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
		<Stack.Screen name="Listsc" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

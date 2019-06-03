import React from 'react';
import { ActivityIndicator, Alert, Button, FlatList, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './screens/Homescreen.js'
import DetailScreen from './screens/Detailscreen.js'
import ListScreen from './screens/Listscreen.js'


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Listsc: {screen: ListScreen},
  Detail: { screen: DetailScreen },
});

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

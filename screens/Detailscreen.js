import React from 'react';
import { Button, Text, View, TouchableHighlight } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Detalhes',
  };
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const title = navigation.getParam('title', 'no title');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>ItemId: {itemId}</Text>
        <Text>Title: {title}</Text>
      </View>
    );
  }
}

export default DetailScreen

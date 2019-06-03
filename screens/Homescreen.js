import React from 'react';
import { Button, Text, View, TouchableHighlight } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Check list"
        onPress={() => navigate('Listsc', {name: 'unknown'})}
      />
    );
  }
}

export default HomeScreen

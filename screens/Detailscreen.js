import React from 'react';
import { Button, Text, View, TouchableHighlight } from 'react-native';

import {AsyncStorage} from 'react-native';

class DetailScreen extends React.Component {

  static navigationOptions = {
    title: 'Detalhes',
  };

  constructor(props){
    super(props);
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('keyID')
      if(value !== null) {
        console.log(value)
      }
    } catch(e) {
      // error reading value
    }
  }

  render() {
    const { navigation, route } = this.props;
	const { itemId ='NO-ID' } = route.params;
    const { title ='no title' } = route.params;

    {this.getData()}
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

import React from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import { Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';


class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const title = navigation.getParam('title', 'no title');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>ItemId: {JSON.stringify(itemId)}</Text>
        <Text>Title: {JSON.stringify(title)}</Text>
      </View>
    );
  }
}



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Check list"
        onPress={() => navigate('Profile', {name: 'Jane'})}
      />
    );
  }
}

class ProfileScreen extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  _onPress(item) {
    this.props.navigation.navigate('Details', {
      itemId: item.id,
      title: item.title,
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) =>
              <TouchableHighlight
            			onPress={() => this._onPress(item) }
            			underlayColor='black'
            		>
        			<View>
        				<Text style={{ fontSize: 24 }}>{ item.title }</Text>
        				<Text>{ item.releaseYear }</Text>
        			</View>
              </TouchableHighlight>
          }
        />
      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  Details: { screen: DetailsScreen },
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

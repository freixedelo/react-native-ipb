import React from 'react';
import { Button, Text, View, FlatList, TouchableHighlight } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class ListScreen extends React.Component {

  static navigationOptions = {
    title: 'Listagem',
  };

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

/*Fetch json*/
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
    this.props.navigation.navigate('Detail', {
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

export default ListScreen

import React, { Component } from "react";
import { Button, Text, View, FlatList, TouchableHighlight } from "react-native";
import { AsyncStorage } from "react-native";
import { ListItem } from "react-native-elements";

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    {
      this.storeData();
    }
  }

  storeData = async () => {
    try {
      AsyncStorage.setItem("keyID", "async test");
    } catch (e) {
      // saving error
    }
  };

  /*Fetch json*/
  componentDidMount() {
    return fetch("https://facebook.github.io/react-native/movies.json")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.movies
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  _onPress(item) {
    this.props.navigation.navigate("Detail", {
      itemId: item.id,
      title: item.title
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subtitle={item.releaseYear}
              bottomDivider
              chevron
              onPress={() => this._onPress(item)}
            />
          )}
        />
      </View>
    );
  }
}

export default ListScreen;

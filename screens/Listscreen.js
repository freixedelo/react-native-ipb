import React, { Component } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Image,
  FlatList,
  View,
} from "react-native";
import { ListItem, Header } from "react-native-elements";

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
  async componentDidMount() {
    try {
      let response = await fetch("https://reactnative.dev/movies.json");
      let json = await response.json();
      this.setState({
        isLoading: false,
        dataSource: json.movies,
      });
    } catch (err) {
      console.log("Error fetching data-----------", err);
    }
  }

  _onPress(item) {
    this.props.navigation.navigate("Detail", {
      itemId: item.id,
      title: item.title,
    });
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <View>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <Header
          placement="left"
          leftComponent={{
            icon: "menu",
            color: "#fff",
            onPress: () => {
              this.props.navigation.toggleDrawer();
            },
          }}
          backgroundColor="#009688"
          centerComponent={{ text: "Using FlatList", style: { color: "#fff" } }}
          rightComponent={{ icon: "info", color: "#fff" }}
        />
        <FlatList
          data={this.state.dataSource}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subtitle={item.releaseYear}
              leftElement={
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/icon.png")}
                />
              }
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

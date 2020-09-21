import React, { Component } from "react";
import { AsyncStorage, Image, Text, View } from "react-native";
import { OwnHeader } from "./shared/Header.js";

class DetailScreen extends Component {
  constructor(props) {
    super(props);
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("keyID");
      if (value !== null) {
        console.log(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  render() {
    const { navigation, route } = this.props;
    const { itemId = "NO-ID" } = route.params;
    const { title = "no title" } = route.params;

    {
      this.getData();
    }
    return (
      <View style={{ flex: 1 }}>
        <OwnHeader navigation={this.props.navigation} title="Detail Page" />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            style={{ width: 200, height: 50 }}
            source={require("../assets/IPB-Cor.png")}
          />
          <Text>Details Screen</Text>
          <Text>ItemId: {itemId}</Text>
          <Text>Title: {title}</Text>
        </View>
      </View>
    );
  }
}

export default DetailScreen;

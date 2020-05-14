import React from "react";
import { Alert } from "react-native";
import { Header } from "react-native-elements";

export const OwnHeader = (props) => (
  <Header
    placement="left"
    leftComponent={{
      icon: "menu",
      color: "#fff",
      onPress: () => {
        props.navigation.toggleDrawer();
      },
    }}
    backgroundColor="#009688"
    centerComponent={{ text: props.title, style: { color: "#fff" } }}
    rightComponent={{
      icon: "info",
      color: "#fff",
      onPress: () =>
        Alert.alert(
          "Clicked on Info",
          "<message here>",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ],
          { cancelable: false }
        ),
    }}
  />
);

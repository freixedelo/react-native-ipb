import React, { Component } from "react";
import { Alert, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles, buttons } from "../style/main";
import { OwnHeader } from "./shared/Header.js";
// import Constants from "expo-constants";

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isEnable: true,
      inputText: "Change this text",
      inputTempText: "",
      buttonTitle: "Disable",
    };
  }

  updateState = () => {
    const { isEnable } = this.state;
    this.setState({
      isEnable: !isEnable,
      buttonTitle: !isEnable ? "Disable" : "Enable",
    });
  };

  updateText = () => {
    const { inputTempText } = this.state;
    this.setState({
      inputText: inputTempText,
    });
  };

  updateTempText = (text) => {
    this.setState({
      inputTempText: text,
    });
  };

  openAlert = () => {
    const { inputTempText } = this.state;
    Alert.alert(
      "Update text?",
      inputTempText,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: this.updateText },
      ],
      { cancelable: false }
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    const { buttonTitle, isEnable, inputText, inputTempText } = this.state;
    return (
      <View style={styles.container}>
        <OwnHeader navigation={this.props.navigation} title="Homepage" />
        <View style={styles.content}>
          <Text style={styles.header}>Tutorial APP</Text>
          <View>
            <Text style={styles.title}>{inputText}</Text>
            <Input
              style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
              onChangeText={(text) => this.updateTempText(text)}
              placeholder={"Add new text here"}
              editable={isEnable}
              value={inputTempText}
            />

            <View style={styles.fixToText}>
              <Button
                title={buttonTitle}
                onPress={this.updateState}
                buttonStyle={buttons.button}
              />
              <Button
                title="Update Text"
                disabled={!isEnable || inputTempText === ""}
                onPress={this.openAlert}
                buttonStyle={buttons.button}
              />
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <Text style={styles.title}>
              This button navigates to another page.
            </Text>
            <Button
              title="List items"
              onPress={() => navigate("Listsc", { name: "unknown" })}
              type="outline"
              icon={
                <Icon
                  name="list-ul"
                  color="#009688"
                  style={{ paddingRight: 5 }}
                />
              }
              buttonStyle={{ marginLeft: 15, borderColor: "#009688" }}
              titleStyle={{ color: "#009688" }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default HomeScreen;

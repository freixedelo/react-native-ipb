import React, { Component } from "react";
import { Alert, Button, Text, TextInput, View, StyleSheet } from "react-native";
// import Constants from "expo-constants";

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isEnable: true,
      inputText: "Change this text",
      inputTempText: "",
      buttonTitle: "Disable"
    };
  }

  updateState = () => {
    const { isEnable } = this.state;
    this.setState({
      isEnable: !isEnable,
      buttonTitle: !isEnable ? "Disable" : "Enable"
    });
  };

  updateText = () => {
    const { inputTempText } = this.state;
    this.setState({
      inputText: inputTempText
    });
  };

  updateTempText = text => {
    this.setState({
      inputTempText: text
    });
  };

  openAlert = () => {
    const { buttonTitle, isEnable, inputTempText } = this.state;
    Alert.alert(
      "Update text?",
      inputTempText,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: this.updateText }
      ],
      { cancelable: false }
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    const { buttonTitle, isEnable, inputText, inputTempText } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Tutorial APP</Text>
        <View>
          <Text style={styles.title}>{inputText}</Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={text => this.updateTempText(text)}
            placeholder={"Add new text here"}
            editable={isEnable}
            value={inputTempText}
          />
          <View style={styles.fixToText}>
            <Button
              title={buttonTitle}
              onPress={this.updateState}
              style={styles.button}
            />
            <Button
              title="Update Text"
              disabled={!isEnable || inputTempText === ""}
              onPress={this.openAlert}
              style={styles.button}
            />
          </View>
        </View>
        <>
          <Text style={styles.title}>
            This button navigates to another page.
          </Text>
          <Button
            title="Check list"
            onPress={() => navigate("Listsc", { name: "unknown" })}
            style={styles.button}
          />
        </>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    marginHorizontal: 20
  },
  header: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 20,
    textAlign: "center"
  },
  button: {
    maxWidth: 15,
    backgroundColor: "#212121"
  },
  title: {
    textAlign: "center",
    marginVertical: 8
  },
  fixToText: {
    marginVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default HomeScreen;

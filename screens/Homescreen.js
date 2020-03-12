import React, { Component } from "react";
import {
  Alert,
  Button,
  Text,
  TextInput,
  View,
  ScrollView,
  StyleSheet
} from "react-native";
import Constants from "expo-constants";

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isEnable: true,
      inputText: "",
      inputTempText: "",
      buttonTitle: "Disable"
    };
  }

  updateState = () => {
    const { isEnable } = this.state;
    this.setState({
      isEnable: !isEnable,
      buttonTitle: isEnable ? "Disable" : "Enable"
    });
  };

  updateText = () => {
    this.setState({
      inputText: this.state.inputTempText
    });
  };

  openAlert = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg", //TODO change inputText
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    const { buttonTitle, isEnable } = this.state;
    return (
      <ScrollView>
        <Text style={styles.header}>Tutorial APP</Text>
        <Button
          title="Check list"
          onPress={() => navigate("Listsc", { name: "unknown" })}
        />

        <View>
          <Text style={styles.title}>
            This layout strategy lets the title define the width of the button.
          </Text>
          <View style={styles.fixToText}>
            <Button title={buttonTitle} onPress={this.updateState} />

            <Button
              title="Update Text"
              disabled={!isEnable}
              onPress={this.openAlert}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    textAlign: "center",
    marginVertical: 8
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default HomeScreen;

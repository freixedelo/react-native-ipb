import React, { Component } from "react";
import {
  Alert,
  Button,
  Text,
  View,
  ScrollView,
  StyleSheet
} from "react-native";

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isEnable: true,
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

  render() {
    const { navigate } = this.props.navigation;
    const { buttonTitle, isEnable } = this.state;
    return (
      <ScrollView>
        <Button title={buttonTitle} onPress={this.updateState} />

        <Button
          title="Update Text"
          disabled={!isEnable}
          onPress={() => Alert.alert("Alert opened")}
        />

        <Button
          title="Check list"
          onPress={() => navigate("Listsc", { name: "unknown" })}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeScreen;

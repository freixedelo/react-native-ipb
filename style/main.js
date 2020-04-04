import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    marginHorizontal: 20
  },
  bottomContainer: {
    position: "absolute",
    bottom: 20,
    alignItems: "center",
    flexDirection: "row"
  },
  header: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 20
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

const buttons = StyleSheet.create({
  button: {
    backgroundColor: "#009688"
  }
});

export { styles, buttons };

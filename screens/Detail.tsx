import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

export function Detail(props) {
  const { navigation, route } = props;
  const { params } = route;
  console.log("PROPS DO DETAIL AO ENTRAR", params);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{params.name}</Text>
    </View>
  );
}

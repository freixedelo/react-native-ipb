import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";

const students = [
  {
    name: "Manuel",
    age: 18,
    course: "EI",
    school: "ESTIG",
    classification: 12,
  },
  {
    name: "Anacleto",
    age: 20,
    course: "EI",
    school: "ESA",
    classification: 9,
  },
  {
    name: "Maria",
    age: 19,
    course: "EI",
    school: "ESTIG",
    classification: 5,
  },
  {
    name: "Antonieta",
    age: 18,
    course: "EI",
    school: "ESTIG",
    classification: 10,
  },
  {
    name: "Joana",
    age: 18,
    course: "EI",
    school: "ESA",
    classification: 12,
  },
];

export function List(props) {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>List test</Text>
      <FlatList
        data={students}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => navigation.navigate("Detail", item)}>
              <Text>{item.name}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

type Props = {
  navigation: any;
  route: any;
};

export function Home(props: Props) {
  const { navigation } = props;

  const [xpto, setXpto] = useState<any>(null);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Move to list"
        onPress={() => navigation.navigate("List")}
      />
    </View>
  );
}

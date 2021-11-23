import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Pressable,
} from "react-native";
import { ListItem } from "react-native-elements";

type Props = {
  navigation: any;
  route: any;
};

type Coin = {
  id: string;
  symbol: string;
  priceUsd: string;
};

export function List(props: Props) {
  const { navigation } = props;

  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const getMoviesFromApiAsync = async () => {
      try {
        const response = await fetch("https://api.coincap.io/v2/assets");
        const json = await response.json();
        setCoins(json.data);
      } catch (error) {
        console.error(error);
      }
    };

    getMoviesFromApiAsync();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>List test</Text>
      <FlatList
        data={coins}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => navigation.navigate("Detail", item.id)}>
              <ListItem bottomDivider>
                <Text>{item.symbol}</Text>
              </ListItem>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

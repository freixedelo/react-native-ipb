import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

type Props = {
  navigation: any;
  route: any;
};

type Coin = {
  rank: string;
};

export function Detail(props: Props) {
  const { navigation, route } = props;
  const { params } = route;
  const [coinDetail, setCoin] = useState({});

  useEffect(() => {
    const getMoviesFromApiAsync = async () => {
      try {
        const response = await fetch(
          `https://api.coincap.io/v2/assets/${params.id}`
        );
        const json = await response.json();
        setCoin(json.data);
      } catch (error) {
        console.error(error);
      }
    };

    getMoviesFromApiAsync();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{params.id}</Text>
      <Text>{coinDetail.rank}</Text>
    </View>
  );
}

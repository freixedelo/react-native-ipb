import React, { useState, useEffect } from "react";
import { Image, Text, View, Platform } from "react-native";
import { Button } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";

type Props = {
  navigation: any;
  route: any;
};

export function Home(props: Props) {
  const { navigation } = props;

  const [xpto, setXpto] = useState<any>(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Move to list"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Move to camera"
        onPress={() => navigation.navigate("Camera")}
      />
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}

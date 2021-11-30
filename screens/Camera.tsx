import React, { useState, useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import { Camera } from "expo-camera";

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={type}>
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row",
              margin: 20,
            }}
          >
            <Pressable
              style={{ flex: 0.2, alignSelf: "flex-end", alignItems: "center" }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text style={{ fontSize: 18, color: "white" }}> Flip </Text>
            </Pressable>
          </View>
        </Camera>
      </View>
    </View>
  );
}

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import Mock from "../../assets/download.jpg";

const { height, width } = Dimensions.get("window");

export default function MoreUpper() {
  return (
    <View style={styles.body}>
      <View style={styles.bodyBody}>
        <ImageBackground source={Mock} style={styles.bgImage} />
        <Text style={styles.text}>Yooo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  bodyBody: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "#000000a0",
  },
});

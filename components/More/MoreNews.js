// import { View, Text, StyleSheet, Dimensions } from "react-native";
// import React from "react";
// import MoreUpper from "./MoreUpper";
// import MoreBottom from "./MoreBottom";

// const { height, width } = Dimensions.get("window");

// export default function MoreNews() {
//   return (
//     <View style={styles.body}>
//       <MoreUpper />
//       <MoreBottom />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//   },
// });

import * as React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Mock from "../../assets/download.jpg";

const { height, width } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Mock} // Provide the path to your image
        style={styles.background}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.overlay}
        />
        <Text style={styles.text}>
          {" "}
          "ከ 1977 በኋላ ታይቶ በየማይታወቅ ሁኔታ አጅግ የከፋ ድርቅ ተከስቷል" - አቶ ጌታቸው ረዳ ::
        </Text>

        <Text></Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * 0.35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "flex-end",

    // alignItems: "center",
  },
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  text: {
    fontSize: 27,
    color: "#fff",
    backgroundColor: "transparent",
    paddingBottom: 15,
    paddingLeft: 5,
    margin: 10,
  },
});

import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default function Navbar() {
  return (
    <View style={styles.Navbar}>
      <MaterialCommunityIcons name="email-newsletter" style={styles.logo} />
      <View style={styles.navInput}>
        <TextInput
          //   placeholderTextColor="#E1E4EA"
          style={styles.input}
          placeholder="search for the latest news .."
        />
        <AntDesign name="search1" style={styles.logo2} />
      </View>
      <AntDesign name="bars" style={styles.logo3} />
    </View>
  );
}

const styles = StyleSheet.create({
  Navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: height * 0.017,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.015,
  },
  logo: {
    fontSize: width * 0.11,
    marginTop: height * 0.005,
    // color: "#000",
  },
  logo2: {
    fontSize: width * 0.07,
    marginHorizontal: height * 0.005,
    marginTop: height * 0.005,
    // color: "#fff",
  },
  logo3: {
    fontSize: width * 0.125,
    marginTop: height * 0.001,
    // color: "#fff",
  },
  navInput: {
    // borderColor: "#fff",
    borderWidth: 1.4,
    flex: 1,
    marginHorizontal: width * 0.04,
    height: height * 0.06,
    textAlign: "center",
    borderRadius: 7,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: height * 0.007,
    // paddingVertical,
  },
  input: {
    flex: 1,
    marginLeft: width * 0.04,
    // color: "#fff",
    fontSize: 17,
  },
});

import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  useState,
} from "react-native";
import Navbar from "../components/Admin/Navbar";
import MoreNews from "../components/More/MoreNews";
import MoreBottom from "../components/More/MoreBottom";

const { height, width } = Dimensions.get("window");

const More = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.style}>
      <ScrollView style={styles.container}>
        {/* <Navbar /> */}
        <MoreNews />
        <MoreBottom />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  style: {
    backgroundColor: "#fff",
    // paddingTop: height * 0.04,
    flex: 1,
    // marginBottom: 50,
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
    // marginBottom: 10,
  },
});

export default More;

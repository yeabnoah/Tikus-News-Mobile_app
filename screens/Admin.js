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
import axios from "axios";
import Navbar from "../components/Admin/Navbar";
import Form from "../components/Admin/Form";

const { height, width } = Dimensions.get("window");

const Admin = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.style}>
      <ScrollView style={styles.container}>
        <Navbar navigation={navigation} />
        <Form navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  style: {
    backgroundColor: "#fff",
    paddingTop: height * 0.04,
    flex: 1,
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});

export default Admin;

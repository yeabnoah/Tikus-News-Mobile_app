import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";

export default function Choice() {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.BtnContainer}>
          <Text style={styles.BtnText}>Entertainment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BtnContainer}>
          <Text style={styles.BtnText}>Entertainment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BtnContainer}>
          <Text style={styles.BtnText}>Entertainment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  BtnContainer: {
    backgroundColor: "#fff",
    width: "max-content",
    height: "max-content",
    borderRadius: 10,
    borderColor: "#fff",
    justifyContent: "center",
    marginHorizontal: 3,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  BtnText: {
    textAlign: "center",
    color: "black",
    fontSize: 18,
  },
});

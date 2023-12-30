import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

const { height, width } = Dimensions.get("window");
export default function Choice() {
  return (
    <View style={styles.body}>
      <View style={styles.flex}>
        <FontAwesome name="filter" size={23} color="black" />
        <Text style={styles.Category}>Category</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.BtnContainer}>
          <Text style={styles.BtnText}>Trending</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BtnContainer}>
          <Text style={styles.BtnText}>Breaking</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BtnContainer}>
          <Text style={styles.BtnText}>Politics</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.BtnContainer}>
          <Text style={styles.BtnText}>Entertainment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BtnContainer}>
          <Text style={styles.BtnText}>Business</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BtnContainer}>
          <Text style={styles.BtnText}>Sport</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
    // backgroundColor: "red",
    // width: 130,
    justifyContent: "center",
    // paddingTop: 10,
    paddingLeft: 3,
    // borderRadius: 110,
    borderBottomColor: "#CFD2DA",
    borderBottomWidth: 1.5,
    borderStyle: "dashed",
    marginBottom: 10,
  },
  body: {
    marginVertical: height * 0.02,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  Category: {
    fontSize: 20,
    fontWeight: "600",
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  BtnContainer: {
    justifyContent: "center",
    backgroundColor: "#CFD2DA",
    width: "max-content",
    height: "max-content",
    borderRadius: 25,
    borderColor: "#fff",
    justifyContent: "center",
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 4,
  },
  BtnText: {
    textAlign: "center",
    color: "black",
    fontSize: 17,
  },
});

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
        <Text style={styles.Category}>የኔ ምርጫዎች</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.BtnContainer}>
          <Text style={styles.BtnText}>አዲስ ነገር</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BtnContainer}>
          <Text style={styles.BtnText}>ሰበር ዜና</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BtnContainer}>
          <Text style={styles.BtnText}>የፖለቲካ ዜናዎች</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.BtnContainer}>
          <Text style={styles.BtnText}>መዝናኛ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BtnContainer}>
          <Text style={styles.BtnText}>ቢዝነስ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BtnContainer}>
          <Text style={styles.BtnText}>ስፖርት</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BtnContainer}>
          <Text style={styles.BtnText}>የአሁን</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flexer}>
        <FontAwesome name="newspaper-o" size={23} color="black" />
        <Text style={styles.Category}>ዜናዎች</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
    justifyContent: "center",
    // paddingTop: 10,
    paddingLeft: 3,
    // borderRadius: 110,
    borderBottomColor: "#CFD2DA",
    borderBottomWidth: 1.5,
    borderStyle: "dashed",
    marginBottom: 10,
  },

  flexer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 3,
    borderBottomColor: "#CFD2DA",
    // borderBottomWidth: 1.5,
    borderStyle: "dashed",
    marginTop: 30,
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
    // marginR: -5,
  },
  Category: {
    fontSize: 20,
    fontWeight: "600",
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  BtnContainer: {
    justifyContent: "center",
    backgroundColor: "#CFD2DA",
    width: "max-content",
    height: "max-content",
    borderRadius: 25,
    borderColor: "#fff",
    justifyContent: "center",
    marginRight: 10,
    marginLeft: 7,
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

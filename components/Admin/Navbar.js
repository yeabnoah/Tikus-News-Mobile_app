import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
import React from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

export default function Navbar({ navigation }) {
  return (
    <View style={styles.Navbar}>
      <View style={styles.name}>
        <FontAwesome5 name="hotjar" size={28} color="black" />
        <Text style={styles.logoText}>ትኩስ-ዜና</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Navbar: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    paddingTop: height * 0.017,
    paddingBottom: height * 0.006,
    backgroundColor: "#fff",
    paddingLeft: width * 0.03,
  },
  name: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    paddingTop: height * 0.004,
    // marginLeft: width * -0.09,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "800",
    marginLeft: 5,
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
    fontSize: width * 0.1,
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
  Image: {
    height: 40,
    width: 150,
    marginLeft: width * -0.09,
  },
});

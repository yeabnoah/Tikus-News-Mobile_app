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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Admin");
        }}
      >
        <AntDesign name="bars" style={styles.logo3} />
      </TouchableOpacity>

      {/* <MaterialCommunityIcons name="email-newsletter" style={styles.logo} /> */}
      {/* <View style={styles.navInput}>
        <TextInput
          //   placeholderTextColor="#E1E4EA"
          style={styles.input}
          placeholder="search for the latest news .."
        />
        <AntDesign name="search1" style={styles.logo2} />
      </View> */}

      <View style={styles.name}>
        {/* <Image
          style={styles.Image}
          source={{
            uri: "https://i0.wp.com/cleanfeed.thetvroom.com/media/2021/07/bbc-logo-current-001-01.png?resize=647%2C287&ssl=1",
          }}
        /> */}

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
    marginLeft: width * -0.09,
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

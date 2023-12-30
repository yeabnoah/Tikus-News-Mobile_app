import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

const { height, width } = Dimensions.get("window");

export default function Form({ navigation }) {
  const [imgLink, setImgLink] = useState("");
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = async () => {
    try {
      console.log("Submitting news...");

      const response = await axios.post(
        `http://192.168.137.1:4000/create`,
        {
          imgUrl: imgLink,
          title: title,
          preview: preview,
          category: category,
          newsContent: content,
          source: source,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      //   console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting news:", error);
    }
  };

  return (
    <View style={styles.body}>
      <View>
        <View style={styles.flex}>
          <Foundation name="page-add" size={24} color="black" />
          <Text style={styles.Title}>ዜና ፍጠር</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Image Link: </Text>
          <TextInput
            onChangeText={(data) => {
              setImgLink(data);
            }}
            style={styles.inputBox}
            placeholder="የምስል ማስፍንጠሪያ ያስግቡ ..."
          />

          <Text style={styles.label}>Title: </Text>
          <TextInput
            onChangeText={(data) => {
              setTitle(data);
            }}
            style={styles.inputBox}
            placeholder="የምስል ማስፍንጠሪያ ያስግቡ ..."
          />

          <Text style={styles.label}>Preview: </Text>
          <TextInput
            onChangeText={(data) => {
              setPreview(data);
            }}
            style={styles.inputBox}
            placeholder="የምስል ማስፍንጠሪያ ያስግቡ ..."
          />

          <Text style={styles.label}>Category: </Text>
          <TextInput
            onChangeText={(data) => {
              setCategory(data);
            }}
            style={styles.inputBox}
            placeholder="የምስል ማስፍንጠሪያ ያስግቡ ..."
          />

          <Text style={styles.label}>Source: </Text>
          <TextInput
            onChangeText={(data) => {
              setSource(data);
            }}
            style={styles.inputBox}
            placeholder="የምስል ማስፍንጠሪያ ያስግቡ ..."
          />

          <Text style={styles.label}>Content: </Text>
          <View style={styles.container1}>
            <TextInput
              onChangeText={(data) => {
                setContent(data);
              }}
              style={styles.textInput}
              multiline={true}
              numberOfLines={4}
              placeholder="Type here..."
            />
          </View>
          <View style={styles.flexed}>
            <TouchableOpacity style={styles.btn} onPress={submitHandler}>
              <Foundation
                style={styles.icon}
                name="page-add"
                size={20}
                color="black"
              />
              <Text style={styles.btnText}>ፍጠር</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <AntDesign
                style={styles.icon}
                name="back"
                size={20}
                color="black"
              />
              <Text style={styles.btnText}>ተመለስ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    borderStyle: "dashed",
    width: width * 0.8,
    paddingBottom: 10,
  },
  body: {
    flex: 1,
    marginLeft: width * 0.07,
    marginTop: 14,
    marginBottom: 50,
  },
  Title: {
    fontSize: width * 0.06,
    fontWeight: "600",
    marginLeft: 10,
  },
  form: {
    borderWidth: 1,
    marginTop: 20,
    marginRight: 30,
    padding: 10,
    borderStyle: "dashed",
    height: "max-content",
    borderRadius: 10,
  },
  inputBox: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontSize: 17,
    margin: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
  },
  btn: {
    backgroundColor: "#CFD2DA",
    width: 100,
    justifyContent: "center",
    borderRadius: 5,
    marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  btnText: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 18,
    marginLeft: 7,
    fontWeight: "500",
  },
  flexed: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: {
    paddingTop: 10,
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 15,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    height: 150,
  },
});

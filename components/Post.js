import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import axios from "axios";
import Ip from "../utils/Ip";
import datamo from "../utils/data";

const { height, width } = Dimensions.get("window");

export default function Post({ navigation }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://${Ip}:4000/feed`);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDataId = (post) => {
    axios.get(`http://${Ip}:4000/feed/${post._id}`).then((response) => {
      console.log(response.data);
    });
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.box}>
      <View style={styles.postContainer}>
        {Array.isArray(data) &&
          data.map((post) => (
            <View key={post._id} style={styles.postWrapper}>
              <Image
                source={{
                  uri: post.imgUrl,
                }}
                style={styles.postImage}
              />

              <View style={styles.postText}>
                <View style={styles.title}>
                  <Text style={styles.postTitle}>{post.title}</Text>
                </View>
                <Text style={styles.postContent}>{post.preview}</Text>
                <View style={styles.flex}>
                  <Text style={styles.postHash}>ከ 1 ደቂቃ በፊት</Text>
                  <TouchableOpacity
                    style={styles.postHash}
                    onPress={() => {
                      navigation.navigate("More");
                    }}
                  >
                    <Text
                      onPress={() => {
                        fetchDataId(post);
                      }}
                      style={styles.readMoreButtonText}
                    >
                      ማንበብ ይቅጥሉ
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginBottom: 20,
  },
  postContainer: {
    marginTop: -15,
  },
  postWrapper: {
    height: "max-content",
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: "column",
    borderColor: "#CFD2DA",
    // borderWidth: 2,
    borderRadius: 10,
  },
  flex: {
    borderTopColor: "black",
    borderTopWidth: 1,
    borderStyle: "dashed",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  postImage: {
    height: height * 0.25,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  postText: {
    height: "max-content",
    backgroundColor: "#CFD2DA",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: "#CFD2DA",
    borderWidth: 1,
    borderTopWidth: 0,
  },
  postTitle: {
    fontSize: height * 0.025,
    fontWeight: "600",
    color: "black",
  },
  postHash: {
    fontSize: height * 0.02,
    // fontWeight: "600",
    color: "black",
    marginTop: 5,
  },
  postContent: {
    marginTop: 10,
    color: "black",
    fontWeight: "400",
  },
  readMoreButton: {
    justifyContent: "flex-end",
    marginTop: 2,
    paddingVertical: 7,
    // backgroundColor: "#CFD2DA",
    width: 100,
    justifyContent: "center",
  },
  readMoreButtonText: {
    textAlign: "center",
    fontWeight: "600",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

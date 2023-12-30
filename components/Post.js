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

const { height, width } = Dimensions.get("window");

export default function Post() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://10.25.194.7:4000/feed");
        setData(response.data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <View style={styles.postContainer}>
        {Array.isArray(data) &&
          data.map((post) => (
            <View key={post._id} style={styles.postWrapper}>
              <Image source={{ uri: post.imgUrl }} style={styles.postImage} />
              <View style={styles.postText}>
                <View style={styles.title}>
                  <Text style={styles.postTitle}>{post.title}</Text>
                  <Text style={styles.postHash}># Entertainment</Text>
                </View>
                <Text style={styles.postContent}>{post.newsContent}</Text>
                <TouchableOpacity style={styles.readMoreButton}>
                  <Text style={styles.readMoreButtonText}>Read More</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {},
  postWrapper: {
    height: "max-content",
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 15,
    flexDirection: "column",
  },
  postImage: {
    height: height * 0.25,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  postText: {
    height: 170,
    backgroundColor: "#fff",
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  postTitle: {
    fontSize: height * 0.03,
    fontWeight: "600",
  },
  postHash: {
    fontSize: height * 0.02,
    fontWeight: "600",
    color: "gray",
    marginTop: 5,
  },
  postContent: {
    marginTop: 10,
  },
  readMoreButton: {
    marginLeft: 10,
    marginTop: 2,
    paddingVertical: 7,
    backgroundColor: "#CFD2DA",
    width: 100,
    justifyContent: "center",
  },
  readMoreButtonText: {
    textAlign: "center",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

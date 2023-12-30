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
// import news from ""
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
              <Image
                source={{
                  uri: post.imgUrl,
                }}
                style={styles.postImage}
              />

              <View style={styles.postText}>
                <View style={styles.title}>
                  <Text style={styles.postTitle}>
                    {post.title}
                    {/* " ህወሓት " ያጋጠመው ችግር ከባድ መሆኑና የሚፈታውም በጉባኤ መሆኑ ተገለጸ። */}
                  </Text>
                  {/* <Text style={styles.postHash}># Entertainment</Text> */}
                </View>
                <Text style={styles.postContent}>
                  {/* የህዝባዊ ወያነ ሓርነት ትግራይ (ህወሓት) ማዕከላዊ ኮሚቴና የህወሓት ማዕከላዊ የቁጥጥር ኮሚሽን
                  ዛሬ በጋራ ባወጡት ባለ 4 ነጥብ የአቋም መግለጫ ድርጅቱን ያጋጠሙት ችግሮች ከባድ መሆናቸውን እና
                  እነዚህ ችግሮች ሊፈቱ የሚችሉት በጉባኤ መሆኑን ገልጸዋል። */}
                  {post.newsContent}
                </Text>
                <View style={styles.flex}>
                  <Text style={styles.postHash}>ከ 1 ደቂቃ በፊት</Text>
                  <TouchableOpacity style={styles.postHash}>
                    <Text style={styles.readMoreButtonText}>ማንበብ ይቅጥሉ</Text>
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
  postContainer: {
    marginTop: -15,
  },
  postWrapper: {
    height: "max-content",
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: "column",
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

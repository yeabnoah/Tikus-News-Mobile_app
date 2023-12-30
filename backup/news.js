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
            <View style={styles.flex}>
              <Text style={styles.postHash}>1 min ago</Text>
              <TouchableOpacity style={styles.postHash}>
                <Text style={styles.readMoreButtonText}>Read More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
  </View>
</View>;

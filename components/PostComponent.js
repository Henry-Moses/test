import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Image
          source={require("./assets/images/lights.jpg")}
          resizeMode="cover"
          style={styles.image}
        ></Image>
        <View style={styles.headerGroup}>
          <Text style={styles.subreddit}>{props.Subreddit || "r/Jokes"}</Text>
          <Text style={styles.postDetails}>
            {props.text5 || "Posted by u/ChromeNewfie • 14h"}
          </Text>
        </View>
        <MaterialCommunityIconsIcon
          name="dots-vertical"
          style={styles.moreIcon}
        ></MaterialCommunityIconsIcon>
      </View>
      <Text style={styles.contentText}>
        {props.ContentText || "What noise does a subatomic duck make?\n\nQuark"}
      </Text>
      <View style={styles.actionBar}>
        <View style={styles.voteWrapper}>
          <EntypoIcon name="arrow-up" style={styles.upvoteIcon}></EntypoIcon>
          <Text style={styles.upvotesText}>16.5k</Text>
          <EntypoIcon
            name="arrow-down"
            style={styles.downvoteIcon}
          ></EntypoIcon>
        </View>
        <TouchableOpacity style={styles.commentWrapper}>
          <MaterialCommunityIconsIcon
            name="comment"
            style={styles.commentIcon}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.commentText}>346</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareWrapper}>
          <FontAwesomeIcon
            name="share"
            style={styles.shareIcon}
          ></FontAwesomeIcon>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "space-around",
    width: 326,
    height: 108
  },
  postHeader: {
    width: 320,
    height: 30,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    marginRight: 0,
    marginLeft: 0
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 100
  },
  headerGroup: {
    width: 248,
    height: 27
  },
  subreddit: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  postDetails: {
    color: "#808080",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1,
    marginTop: 15
  },
  moreIcon: {
    color: "grey",
    fontSize: 18
  },
  contentText: {
    width: 320,
    height: 36,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    marginRight: 0,
    marginLeft: 0,
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  actionBar: {
    width: 320,
    height: 16,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    marginRight: 0,
    marginLeft: 0
  },
  voteWrapper: {
    width: 62,
    height: 16,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around",
    marginRight: 0,
    marginLeft: 0
  },
  upvoteIcon: {
    color: "#828384",
    fontSize: 10
  },
  upvotesText: {
    color: "#828384",
    fontSize: 10,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  downvoteIcon: {
    color: "#828384",
    fontSize: 10
  },
  commentWrapper: {
    width: 38,
    height: 16,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    marginRight: 0,
    marginLeft: 0
  },
  commentIcon: {
    color: "#828384",
    fontSize: 10
  },
  commentText: {
    color: "#828384",
    fontSize: 10,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  shareWrapper: {
    width: 49,
    height: 16,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    marginRight: 0,
    marginLeft: 0
  },
  shareIcon: {
    color: "#828384",
    fontSize: 10
  },
  shareText: {
    color: "#828384",
    fontSize: 10,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  }
});

export default Index;

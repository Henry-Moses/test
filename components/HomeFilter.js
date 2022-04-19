import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Index(props) {
  return (
    <View style={styles.container}>
      <MaterialIconsIcon
        name="view-agenda"
        style={styles.layoutIcon}
      ></MaterialIconsIcon>
      <Text style={styles.bestPosts}>BEST POSTS</Text>
      <MaterialCommunityIconsIcon
        name="rocket"
        style={styles.bestPostIcon}
      ></MaterialCommunityIconsIcon>
      <IoniconsIcon
        name="md-arrow-dropdown"
        style={styles.dropdownIcon}
      ></IoniconsIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 48
  },
  layoutIcon: {
    color: "grey",
    fontSize: 20,
    marginLeft: 308,
    marginTop: 24
  },
  bestPosts: {
    color: "rgba(128,128,128,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-700",
    letterSpacing: 1,
    marginLeft: 40,
    marginTop: 24
  },
  bestPostIcon: {
    color: "grey",
    fontSize: 20,
    marginLeft: 15,
    marginTop: 24
  },
  dropdownIcon: {
    color: "grey",
    fontSize: 20,
    marginLeft: 153,
    marginTop: 24
  }
});

export default Index;

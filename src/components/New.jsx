import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function New(props) {
  return (
    <View style={styles.item}>
      <Image source={{ uri: props.new.media }} style={styles.itemImage} />
      <View style={styles.title}>
        <Text style={styles.titleText}>{props.new.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    opacity: 10,
    width: 150,
    position: "relative",
    marginRight: 8,
  },
  itemImage: {
    width: 150,
    height: 250,
    borderRadius: 8,

    opacity: 0.5,
  },
  title: {
    bottom: 0,
    padding: 8,
    position: "absolute",
  },
  titleText: {
    color: "#fff",
    fontFamily: "poppins-semi",
    fontSize: 12,
  },
});

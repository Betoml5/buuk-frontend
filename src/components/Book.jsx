import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Book(props) {
  if (props.image) {
    return (
      <View>
        <Image source={{ uri: props.image }} style={styles.image} />
      </View>
    );
  }

  return (
    <View style={styles.noCover}>
      <Image
        source={require("../assets/noimage.jpg")}
        style={{ resizeMode: "contain", width: 130, height: 190 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 150,
  },
  image: {
    resizeMode: "contain",
    borderRadius: 4,
    width: 150,
    height: 190,
  },
  title: {
    color: "#000",
  },
  noCover: {
    width: 150,
    height: 190,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#Fff",
    resizeMode: "cover",
    marginRight: 8,
  },
});

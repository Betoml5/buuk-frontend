import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
export default function TimelineForm({
  route: {
    params: { book },
  },
}) {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.bookContainer}>
        <Text style={styles.bookTitle}>{book.title}</Text>
        <Image source={{ uri: book.cover }} style={styles.bookImage} />
      </View>
      <View style={styles.counter}>
        <Pressable onPress={() => setCounter(counter + 1)}>
          <Icon name="plus" size={18} color="#fff" />
        </Pressable>
        <Text style={styles.counterText}>{counter}</Text>
        <Pressable>
          <Icon
            name="minus"
            size={18}
            color="#fff"
            onPress={() =>
              counter < 0 ? setCounter(0) : setCounter(counter - 1)
            }
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  bookContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  bookImage: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
  bookTitle: {
    color: "#fff",
    fontFamily: "poppins-semi",
    fontSize: 18,
    marginBottom: 24,
    textAlign: "center",
  },
  counter: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "60%",
    alignItems: "center",
    backgroundColor: "#3F3D58",
    padding: 12,
    borderRadius: 8,
    marginTop: 14,
  },
  counterText: {
    color: "#fff",
    fontFamily: "poppins-semi",
    fontSize: 20,
  },
});

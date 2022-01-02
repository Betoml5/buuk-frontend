import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useUser } from "../hooks/useUser";
export default function TimelineForm({
  route: {
    params: { book },
  },
}) {
  const { addItemToTimeline, setUser, user } = useUser();
  const [counter, setCounter] = useState(0);

  const onPress = async (id) => {
    const item = {
      book: {
        title: book.title,
        cover: book.cover,
        numberPages: counter,
      },
      date: new Date().getDate(),
    };
    try {
      const response = await addItemToTimeline(id, item);
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.bookContainer}>
        <Text style={styles.bookTitle}>{book.title}</Text>
        <Image
          source={{ uri: book.images.thumbnail }}
          style={styles.bookImage}
        />
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
      <Pressable
        onPress={() => onPress(user._id)}
        style={styles.btn}
        disabled={!counter}
      >
        <Text style={styles.btnText}>Agregar al timeline</Text>
      </Pressable>
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
    borderRadius: 8,
  },
  bookTitle: {
    color: "#fff",
    fontFamily: "poppins-semi",
    fontSize: 14,
    marginBottom: 24,
    marginTop: 24,
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
  btn: {
    backgroundColor: "#3F3D58",
    padding: 12,
    marginTop: 10,
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    fontFamily: "poppins-light",
    fontSize: 16,
  },
});

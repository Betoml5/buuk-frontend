import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function Book(props) {
  const navigation = useNavigation();

  if (props.image) {
    return (
      <Pressable
        onLongPress={() => {
          navigation.navigate("LibraryNavigation", {
            screen: "BookDetail",
            params: { book: props.info },
          });
        }}
        delayLongPress={2000}
      >
        <View>
          <Image source={{ uri: props.image }} style={styles.image} />
        </View>
      </Pressable>
    );
  }

  return (
    <Pressable>
      <View style={styles.noCover}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {props?.info?.title}
        </Text>
        <View style={styles.description}>
          {props?.info?.authors?.map((author, index) => (
            <Text key={`#-${author}`} style={styles.descriptionText}>
              {author}
            </Text>
          ))}
          {props?.info?.pageCount ? (
            <Text style={styles.descriptionText}>
              Pag. {props?.info?.pageCount}
            </Text>
          ) : (
            <Text style={styles.descriptionText}>
              Informacion no disponible
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 150,
  },
  description: {
    height: "75%",
    justifyContent: "flex-end",
  },
  descriptionText: {
    color: "#fff",
    fontFamily: "poppins-light",
  },
  image: {
    resizeMode: "contain",
    borderRadius: 4,
    width: 150,
    height: 190,
  },
  title: {
    color: "#fff",
    fontFamily: "poppins-semi",
  },

  noCover: {
    width: 150,
    height: 190,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#F47340",
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 10,
  },
});

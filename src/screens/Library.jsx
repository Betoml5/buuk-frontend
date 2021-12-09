import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Library() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Objetivos de biblioteca</Text>

        <View style={styles.goals_container}>
          <View style={styles.pages}>
            <Image
              source={require("../assets/pages.png")}
              style={{ width: 50, height: 50 }}
            />
            <Text style={styles.number_pages}>324</Text>
            <Text style={styles.number_pages_text}>
              Paginas leidas este mes
            </Text>
          </View>

          <View style={styles.books}>
            <Image
              source={require("../assets/bookreads.png")}
              style={{ width: 50, height: 50, padding: 0, margin: 0 }}
            />
            <Text style={styles.number_books}>34</Text>
            <Text style={styles.number_books_text}>Libros leidos este mes</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    color: "#fff",
    fontFamily: "poppins-bold",
    fontSize: 18,
    marginBottom: 12,
  },
  pages: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
    width: 150,
    borderRadius: 8,
    backgroundColor: "#312C44",
    marginRight: 20,
  },
  number_pages: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: "poppins-bold",
    color: "#D8C6A5",
  },
  number_pages_text: {
    fontFamily: "poppins-semi",
    color: "#D8C6A5",
  },
  books: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "rgba(119, 224,181,0.2)",
    opacity: 20,
    borderRadius: 8,
    padding: 20,
    width: 150,
  },
  number_books: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: "poppins-bold",
    color: "#62BF7C",
    marginLeft: 2,
  },
  number_books_text: {
    fontFamily: "poppins-semi",
    color: "#62BF7C",
    marginLeft: 2,
  },
  goals_container: {
    flexDirection: "row",
  },
});

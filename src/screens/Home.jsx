import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.section_title}>Noticias</Text>
      <ScrollView style={styles.section} horizontal={true}>
        <View>
          <Image
            source={require("../assets/notice.png")}
            style={{
              width: 150,
              height: 150,
              borderRadius: 8,
              marginRight: 10,
            }}
          />
        </View>
        <View>
          <Image
            source={require("../assets/notice.png")}
            style={{
              width: 150,
              height: 150,
              borderRadius: 8,
              marginRight: 10,
            }}
          />
        </View>
        <View>
          <Image
            source={require("../assets/notice.png")}
            style={{
              width: 150,
              height: 150,
              borderRadius: 8,
              marginRight: 10,
            }}
          />
        </View>
      </ScrollView>
      <Text style={styles.section_title}>Tendencia</Text>
      <ScrollView style={styles.section} horizontal={true}>
        <View>
          <Image
            source={require("../assets/book-cover.jpg")}
            style={{
              width: 150,
              height: 250,
              borderRadius: 8,
              marginRight: 10,
            }}
          />
        </View>
        <View>
          <Image
            source={require("../assets/book-cover.jpg")}
            style={{
              width: 150,
              height: 250,
              borderRadius: 8,
              marginRight: 10,
            }}
          />
        </View>
        <View>
          <Image
            source={require("../assets/book-cover.jpg")}
            style={{
              width: 150,
              height: 250,
              borderRadius: 8,
              marginRight: 10,
            }}
          />
        </View>
      </ScrollView>
      <ScrollView style={styles.section} horizontal={true}>
        <View>
          <Image
            source={require("../assets/book-cover.jpg")}
            style={{
              width: 150,
              height: 250,
              borderRadius: 8,
              marginRight: 10,
            }}
          />
        </View>
        <View>
          <Image
            source={require("../assets/book-cover.jpg")}
            style={{
              width: 150,
              height: 250,
              borderRadius: 8,
              marginRight: 10,
            }}
          />
        </View>
        <View>
          <Image
            source={require("../assets/book-cover.jpg")}
            style={{
              width: 150,
              height: 250,
              borderRadius: 8,
              marginRight: 10,
            }}
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,

    backgroundColor: "#1A1736",
  },
  section: {
    flexDirection: "row",
  },
  section_title: {
    color: "#fff",
    marginTop: 10,

    fontSize: 24,
    fontFamily: "poppins-semi",
  },
});

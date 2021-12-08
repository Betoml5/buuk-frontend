import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.news_title}>Noticias</Text>
      <ScrollView style={styles.news} horizontal={true}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
    backgroundColor: "#1A1736",
  },
  news: {
    flexDirection: "row",
  },
  news_title: {
    color: "#fff",
    fontSize: 28,
    fontFamily: "poppins-semi",
  },
});

import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
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

        <Text style={styles.section_title}>Autores del momento</Text>
        <ScrollView style={styles.section} horizontal={true}>
          <View>
            <Image
              source={require("../assets/person1.jpg")}
              style={{
                width: 80,
                height: 80,
                borderRadius: 999,
                marginRight: 10,
                borderColor: "#fff",
                borderWidth: 2,
              }}
            />
          </View>
          <View>
            <Image
              source={require("../assets/person2.jpg")}
              style={{
                width: 80,
                height: 80,
                borderRadius: 999,
                marginRight: 10,
                borderColor: "#fff",
                borderWidth: 2,
                marginLeft: 10,
              }}
            />
          </View>
          <View>
            <Image
              source={require("../assets/person3.jpg")}
              style={{
                width: 80,
                height: 80,
                borderRadius: 999,
                marginRight: 10,
                borderColor: "#fff",
                borderWidth: 2,
                marginLeft: 10,
              }}
            />
          </View>
          <View>
            <Image
              source={require("../assets/person4.jpg")}
              style={{
                width: 80,
                height: 80,
                borderRadius: 999,
                marginRight: 10,
                borderColor: "#fff",
                borderWidth: 2,
                marginLeft: 10,
              }}
            />
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1A1736",
  },
  section: {
    flexDirection: "row",
  },
  section_title: {
    color: "#fff",
    marginTop: 12,

    fontSize: 24,
    fontFamily: "poppins-semi",
  },
});

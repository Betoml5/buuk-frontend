import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { getBestSellers } from "../services/Book";

export default function Home() {
  const [bestSellers, setBestSellers] = useState([]);

  const getData = async () => {
    const data = await getBestSellers();
    setBestSellers(data);
  };

  useEffect(() => {
    getData();

    return () => setBestSellers([]);
  }, []);

  if (bestSellers.length === 0) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

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
          {bestSellers.map((item) => {
            if (item?.thumbnail_url !== undefined) {
              let thumb = item?.thumbnail_url?.split("-");
              let newStr = "";
              if (thumb !== undefined) {
                newStr = thumb[1]?.replace("S", "L");
              }
              newStr = thumb[0] + "-" + newStr;
              item.thumbnail_url = newStr;
            }

            if (item?.thumbnail_url === undefined) {
              return (
                <View style={styles.bookNoCover}>
                  <Text>Libro sin portada</Text>
                </View>
              );
            }
            return (
              <View>
                <Image
                  source={{ uri: item?.thumbnail_url }}
                  style={{
                    width: 150,
                    height: 250,
                    borderRadius: 8,
                    marginRight: 10,
                  }}
                />
              </View>
            );
          })}
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
  bookNoCover: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 150,
    height: 250,
    backgroundColor: "#FFf",
    marginRight: 10,
    borderRadius: 8,
  },
});

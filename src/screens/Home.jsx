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
import { getAuthorsNews, getBooksNews } from "../services/News";

export default function Home() {
  const [bestSellers, setBestSellers] = useState([]);
  const [booksNews, setBooksNews] = useState([]);
  const [authorsNews, setAuthorsNews] = useState([]);

  const getData = async () => {
    // const bestSellersResponse = await getBestSellers();
    // const booksNewsResponse = await getBooksNews();
    const authorsNewsResponse = await getAuthorsNews();
    // setBestSellers(bestSellersResponse);
    // setBooksNews(booksNewsResponse);
    setAuthorsNews(authorsNewsResponse);
  };

  useEffect(() => {
    getData();

    return () => setBestSellers([]);
  }, []);

  // if (bestSellers.length === 0) {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.greating}>Hola, Beto ¿Que vas a leer hoy?</Text>

        {/* <FlatList
          renderItem={({ item }) => (
            <Image
              key={item._id}
              source={{ uri: item.media }}
              style={{
                width: 150,
                height: 250,
                borderRadius: 8,
                marginRight: 10,
              }}
            />
          )}
          horizontal={true}
          style={styles.section}
          data={booksNews}
          keyExtractor={(item) => item._id}
          nestedScrollEnabled
        /> */}

        <Text style={styles.section_title}>Tendencia</Text>

        {/* <FlatList
          renderItem={({ item }) => (
            <Image
              key={item.primary_isbn10}
              source={{ uri: item.book_image }}
              style={{
                width: 150,
                height: 250,
                borderRadius: 8,
                marginRight: 10,
              }}
            />
          )}
          horizontal={true}
          style={styles.section}
          data={bestSellers}
          keyExtractor={(item) => item.primary_isbn10}
          nestedScrollEnabled
        /> */}

        <Text style={styles.section_title}>Autores del momento</Text>
        <FlatList
          renderItem={({ item }) => (
            <View>
              <Image
                key={item._id}
                source={{ uri: item.media }}
                style={{
                  width: 150,
                  height: 250,
                  borderRadius: 8,
                  marginRight: 10,
                  resizeMode: "cover",
                }}
              />
            </View>
          )}
          horizontal={true}
          style={styles.section}
          data={authorsNews}
          keyExtractor={(item) => item._id}
          nestedScrollEnabled
        />
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
  greating: {
    color: "#fff",
    marginTop: 12,
    marginBottom: 12,

    fontSize: 18,
    fontFamily: "poppins-semi",
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

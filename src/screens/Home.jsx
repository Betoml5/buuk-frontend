import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import New from "../components/New";
import { getBestSellers } from "../services/Book";
import { getAuthorsNews, getBooksNews } from "../services/News";

export default function Home() {
  const [bestSellers, setBestSellers] = useState([]);
  const [booksNews, setBooksNews] = useState([]);
  const [authorsNews, setAuthorsNews] = useState([]);

  const getData = async () => {
    const booksNewsResponse = await getBooksNews();
    const bestSellersResponse = await getBestSellers();
    const authorsNewsResponse = await getAuthorsNews();
    setBooksNews(booksNewsResponse);
    setBestSellers(bestSellersResponse);
    setAuthorsNews(authorsNewsResponse);
  };

  useEffect(() => {
    getData();

    return () => {
      setBestSellers([]);
      setAuthorsNews([]);
      setBooksNews([]);
    };
  }, []);

  if (
    (booksNews.length === 0) |
    (bestSellers.length === 0) |
    (authorsNews.length === 0)
  ) {
    return (
      <ActivityIndicator
        size="large"
        color="#fff"
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      />
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <Text style={styles.greating}>Hola, Beto ¿Que vas a leer hoy?</Text> */}
        <Text style={styles.greating}>Noticias</Text>

        <FlatList
          renderItem={({ item }) => <New new={item} />}
          horizontal={true}
          style={styles.section}
          data={booksNews}
          keyExtractor={(item) => item._id}
          nestedScrollEnabled
        />

        <Text style={styles.section_title}>Tendencia</Text>

        <FlatList
          renderItem={({ item }) => (
            <Image
              key={item.primary_isbn10}
              source={{ uri: item.book_image }}
              style={styles.bookImage}
            />
          )}
          horizontal={true}
          style={styles.section}
          data={bestSellers}
          keyExtractor={(item) => item.primary_isbn10}
          nestedScrollEnabled
        />

        <Text style={styles.section_title}>Noticias sobre autores</Text>
        <FlatList
          renderItem={({ item }) => <New new={item} />}
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
  bookImage: {
    width: 150,
    height: 250,
    borderRadius: 8,
    marginRight: 10,
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
    marginBottom: 12,
    fontSize: 18,
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

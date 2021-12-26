import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Genders from "../components/Genders";
import { useBook } from "../hooks/useBook";

export default function Discover() {
  const { searchBooksBySubject } = useBook();
  const [books, setBooks] = useState([]);
  const [fictionBooks, setFictionBooks] = useState([]);
  const [romanceBook, setRomanceBooks] = useState([]);
  const [businessBooks, setBusinessBooks] = useState([]);

  const getData = async () => {
    try {
      const fictionResponse = await searchBooksBySubject("ficcion");
      const romanceResponse = await searchBooksBySubject("romance");
      const businessResponse = await searchBooksBySubject("negocios");
      setFictionBooks(fictionResponse);
      setRomanceBooks(romanceResponse);
      setBusinessBooks(businessResponse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Genders />
      <Text>Ficción</Text>
      <FlatList
        horizontal={true}
        data={fictionBooks}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View key={item.key} style={styles.bookContainer}>
            <Image source={{ uri: item.cover }} style={styles.bookImage} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  bookContainer: {
    marginRight: 10,
  },
  bookImage: {
    resizeMode: "contain",
    borderRadius: 4,
    width: 150,
    height: 190,
  },
});

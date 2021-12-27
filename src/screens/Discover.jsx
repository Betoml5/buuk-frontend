import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import Genders from "../components/Genders";
import { useBook } from "../hooks/useBook";
import { useUser } from "../hooks/useUser";

export default function Discover() {
  const { searchBooksBySubject } = useBook();
  const { isLoading } = useUser();
  const [books, setBooks] = useState([]);
  const [fictionBooks, setFictionBooks] = useState([]);
  const [romanceBooks, setRomanceBooks] = useState([]);
  const [businessBooks, setBusinessBooks] = useState([]);

  const getData = async () => {
    try {
      const fictionResponse = await searchBooksBySubject("ficcion");
      const romanceResponse = await searchBooksBySubject("romance");
      const businessResponse = await searchBooksBySubject("education");
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
    <ScrollView style={styles.container}>
      <Genders setBooks={setBooks} />
      {isLoading && (
        <ActivityIndicator
          size="large"
          color="#fff"
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            height: "10%",
          }}
        />
      )}
      {books.length > 0 && (
        <FlatList
          horizontal={true}
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View key={item.key} style={styles.bookContainer}>
              <Image source={{ uri: item.cover }} style={styles.bookImage} />
            </View>
          )}
        />
      )}
      <Text style={styles.title}>Ficción</Text>
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
      <Text style={styles.title}>Romance</Text>
      <FlatList
        horizontal={true}
        data={romanceBooks}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View key={item.key} style={styles.bookContainer}>
            <Image source={{ uri: item.cover }} style={styles.bookImage} />
          </View>
        )}
      />
      <Text style={styles.title}>Negocios</Text>
      <FlatList
        horizontal={true}
        data={businessBooks}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View key={item.key} style={styles.bookContainer}>
            <Image source={{ uri: item.cover }} style={styles.bookImage} />
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },
  bookContainer: {
    maxWidth: 150,
  },
  bookImage: {
    resizeMode: "contain",
    borderRadius: 4,
    width: 150,
    height: 190,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "poppins-semi",
    marginTop: 10,
    marginBottom: 10,
  },
});

import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import Book from "../components/Book";
import Genders from "../components/Genders";
import { useBook } from "../hooks/useBook";

export default function Discover() {
  const { searchBooksBySubject } = useBook();
  const [books, setBooks] = useState([]);
  const [fictionBooks, setFictionBooks] = useState([]);
  const [romanceBooks, setRomanceBooks] = useState([]);
  const [businessBooks, setBusinessBooks] = useState([]);

  const getData = async () => {
    try {
      const fictionResponse = await searchBooksBySubject("ficcion");
      const romanceResponse = await searchBooksBySubject("romance");
      const businessResponse = await searchBooksBySubject("business");
      setFictionBooks(fictionResponse);
      setRomanceBooks(romanceResponse);
      setBusinessBooks(businessResponse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();

    return () => {
      setFictionBooks([]);
      setRomanceBooks([]);
      setBusinessBooks([]);
    };
  }, []);

  if (
    fictionBooks?.length === 0 &&
    romanceBooks?.length === 0 &&
    businessBooks?.length === 0
  )
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
  return (
    <ScrollView style={styles.container} nestedScrollEnabled>
      <Genders setBooks={setBooks} />

      {books.length > 0 && (
        <>
          <Text style={styles.title}>Busqueda</Text>
          <FlatList
            horizontal={true}
            data={books}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Book
                key={item.id}
                image={item.images?.thumbnail}
                title={item?.title}
                info={item}
              />
            )}
          />
        </>
      )}
      <Text style={styles.title}>Ficción</Text>
      <FlatList
        horizontal={true}
        data={fictionBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Book
            key={item.id}
            image={item.images?.thumbnail}
            title={item?.title}
            info={item}
          />
        )}
      />
      <Text style={styles.title}>Romance</Text>
      <FlatList
        horizontal={true}
        data={romanceBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Book
            key={item.id}
            image={item.images?.thumbnail}
            title={item?.title}
            info={item}
          />
        )}
      />
      <Text style={styles.title}>Negocios</Text>
      <FlatList
        horizontal={true}
        data={businessBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Book
            key={item.id}
            image={item.images?.thumbnail}
            title={item?.title}
            info={item}
          />
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

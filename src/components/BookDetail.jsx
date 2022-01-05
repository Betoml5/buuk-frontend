import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function BookDetail({
  route: {
    params: { book },
  },
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Image source={{ uri: book.images.thumbnail }} style={styles.image} />
      <View style={styles.bookInfoContainer}>
        {book?.authors?.length > 1 ? (
          <Text style={styles.dataTitle}>Autores</Text>
        ) : (
          <Text style={styles.dataTitle}>Autor</Text>
        )}
        {book?.authors?.length > 0 ? (
          book?.authors?.map((author) => (
            <Text key={author} style={styles.subtitle}>
              {author}
            </Text>
          ))
        ) : (
          <Text style={styles.subtitle}>No hay autores registrados</Text>
        )}
        <Text style={styles.dataTitle}>Fecha de publicacion</Text>
        <Text style={styles.subtitle}>{book.publishedDate}</Text>
        <Text style={styles.dataTitle}>Numero de paginas</Text>
        <Text style={styles.subtitle}>{book.pageCount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#322F4C",
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    color: "#FFf",
    fontFamily: "poppins-semi",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  dataTitle: {
    color: "#fff",
    fontFamily: "poppins-semi",
  },
  subtitle: {
    color: "#fff",
    fontFamily: "poppins-light",
  },
  bookInfoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

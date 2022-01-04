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
      {book?.authors?.length > 1 ? (
        <Text style={styles.subtitle}>Autores</Text>
      ) : (
        <Text style={styles.subtitle}>Autor</Text>
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
      <Text style={styles.subtitle}>Fecha de publicacion</Text>
      <Text style={styles.subtitle}>{book.publishedDate}</Text>
      <Text style={styles.subtitle}>Numero de paginas</Text>
      <Text style={styles.subtitle}>{book.pageCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#322F4C",
  },
  title: {
    color: "#FFf",
    fontFamily: "poppins-semi",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  subtitle: {
    color: "#fff",
    fontFamily: "poppins-light",
    marginTop: 10,
  },
});

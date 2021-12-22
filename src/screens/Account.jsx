import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { useUser } from "../hooks/useUser";

export default function Account() {
  const [books, setBooks] = useState([]);
  const { profile, user, userFetched } = useUser();

  // const getData = async () => {
  //   try {
  //     const response = await profile(user?.id);
  //     setBooks(response.library);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   // getData();
  // }, []);

  console.log(userFetched?.library);

  return (
    <View style={styles.container}>
      <ScrollView>
        {userFetched?.library.length > 0 ? (
          <>
            <Text style={styles.reading_title}>Leyendo</Text>

            <FlatList
              renderItem={({ item }) => (
                <Image source={{ uri: item.cover }} style={styles.book} />
              )}
              horizontal={true}
              data={userFetched?.library}
              keyExtractor={(item) => item.id}
              nestedScrollEnabled
            />
          </>
        ) : (
          <Text>Aun no estas leyendo nada :(</Text>
        )}
        {/* <Text style={styles.reading_title}>Quiero leer</Text>
        <ScrollView horizontal={true}>
          <Image
            source={require("../assets/book-cover-1.jpg")}
            style={styles.book}
          />
          <Image
            source={require("../assets/book-cover-1.jpg")}
            style={styles.book}
          />
          <Image
            source={require("../assets/book-cover-1.jpg")}
            style={styles.book}
          />
        </ScrollView> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  reading_title: {
    color: "#fff",
    fontFamily: "poppins-semi",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },

  book: {
    width: 100,
    height: 160,
    borderRadius: 8,
    marginRight: 10,
  },
});

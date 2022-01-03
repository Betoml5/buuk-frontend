import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { FlatList } from "react-native";
import { useUser } from "../hooks/useUser";
import { useNavigation } from "@react-navigation/native";
import Book from "../components/Book";

export default function Account() {
  const { user, setUser, removeFromLibrary } = useUser();
  const navigation = useNavigation();

  const handleRemoveFromLibrary = async (id, bookId) => {
    try {
      const response = await removeFromLibrary(id, bookId);
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {user?.library?.length > 0 ? (
          <>
            <Text style={styles.reading_title}>Leyendo</Text>

            <FlatList
              renderItem={({ item }) => (
                <View>
                  <Book image={item.images.thumbnail} info={item} />
                  <Pressable
                    style={styles.btn}
                    onPress={() => handleRemoveFromLibrary(user?._id, item.id)}
                  >
                    <Text style={styles.btnText}>Eliminar</Text>
                  </Pressable>
                </View>
              )}
              horizontal={true}
              data={user?.library}
              keyExtractor={(item) => item.id}
              nestedScrollEnabled
            />
          </>
        ) : (
          <View style={styles.notReadingContainter}>
            <Text style={styles.notReadingText}>Aun no estas leyendo nada</Text>
            <Pressable
              style={[{ backgroundColor: "#242143" }]}
              onPress={() => {
                navigation.navigate("LibraryNavigation", { screen: "Library" });
              }}
            >
              <Text style={styles.notReadingText}>Agregar un libro</Text>
            </Pressable>
          </View>
        )}
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
  notReadingContainter: {
    backgroundColor: "#322F4C",
    padding: 24,
    borderRadius: 8,
  },
  notReadingText: {
    color: "#fff",
    fontFamily: "poppins-semi",
    fontSize: 18,
    padding: 8,
    textAlign: "center",
    borderRadius: 8,
  },
  btn: {
    backgroundColor: "#322F4C",
    padding: 8,
    borderRadius: 8,
    marginTop: 10,
    width: "80%",
    alignSelf: "center",
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "poppins-light",
  },
});

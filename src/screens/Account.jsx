import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Button,
  Image,
  LogBox,
} from "react-native";
import { FlatList } from "react-native";
import { useUser } from "../hooks/useUser";
import { useNavigation } from "@react-navigation/native";
import Book from "../components/Book";
import { uploadImage } from "../services/firebase/upload-image";
import * as ImagePicker from "expo-image-picker";
import storage from "../services/firebase/index";
LogBox.ignoreLogs(["Setting a timer"]);

export default function Account() {
  const { user } = useUser();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        {user?.library?.length > 0 ? (
          <>
            <Text style={styles.reading_title}>Leyendo</Text>

            <FlatList
              renderItem={({ item }) => (
                <Book image={item.images.thumbnail} info={item} />
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
                navigation.navigate("AccountNavigation", { screen: "Library" });
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
});

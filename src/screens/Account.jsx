import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import { useUser } from "../hooks/useUser";

export default function Account() {
  const { logout } = useUser();
  const handleLogout = async () => await logout();

  return (
    <View style={styles.container}>
      <Pressable style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Cerrar sesion</Text>
      </Pressable>
      <ScrollView>
        <Text style={styles.reading_title}>Leyendo</Text>
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
        </ScrollView>
        <Text style={styles.reading_title}>Quiero leer</Text>
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
        </ScrollView>
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
    width: 120,
    height: 200,
    borderRadius: 8,
    marginRight: 10,
  },
  logoutBtn: {
    backgroundColor: "#242143",
    marginTop: 40,
    padding: 8,
    borderRadius: 8,
    alignSelf: "center",
    shadowRadius: 10,
  },
  logoutText: {
    color: "#fff",
    fontFamily: "poppins-light",
  },
});

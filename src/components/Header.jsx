import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  return (
    <SafeAreaView style={styles.header}>
      <TextInput placeholder="Buscar libro..." style={styles.input} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#C3B091",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: 8,
    paddingBottom: 16,
  },
  input: {
    padding: 6,

    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

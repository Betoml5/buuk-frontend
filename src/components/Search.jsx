import React from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Search({ state, setState }) {
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.header_container}>
        <Icon name="search" size={18} style={styles.icon} />
        <TextInput
          placeholder="Titulos, autores o temas"
          style={styles.input}
          onChange={onChange}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 8,
    paddingBottom: 16,
    height: 100,
  },
  header_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    position: "relative",
  },
  icon: {
    backgroundColor: "#fff",
    padding: 10.4,
    borderTopLeftRadius: 999,
    borderBottomLeftRadius: 999,
  },
  input: {
    padding: 6,
    width: "80%",
    backgroundColor: "#fff",
    borderTopRightRadius: 999,
    borderBottomRightRadius: 999,
  },
});

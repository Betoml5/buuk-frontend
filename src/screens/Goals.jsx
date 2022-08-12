import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useUser } from "../hooks/useUser";

export default function Goals() {
  const { user } = useUser();
  console.log(user.timeline);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi estanteria</Text>
      <View style={styles.line}></View>

      <View styles={styles.goalsContainer}>
        <View style={styles.goal}>
          <Text style={styles.goalTitle}>Leido</Text>
          <Image source={user.timeline.items} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontFamily: "poppins-semi",
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  line: {
    width: "75%",
    height: 0.5,
    opacity: 0.7,
    borderRadius: 999,

    backgroundColor: "#fff",
    marginTop: 10,
    marginBottom: 0,
    marginRight: "auto",
    marginLeft: "auto",
  },
  goalsContainer: {
    padding: 20,
  },

  goal: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#322F4C",
  },
});

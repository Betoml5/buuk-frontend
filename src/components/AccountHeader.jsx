import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
export default function AccountHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icons}>
          <View>
            <Icon name="arrow-left" size={25} color="#fff" />
          </View>
          <View>
            <Icon name="cog" size={25} color="#fff" />
          </View>
        </View>
        <View style={styles.user_information}>
          <Image
            source={require("../assets/person1.jpg")}
            style={styles.user_image}
          />
          <Text style={styles.user_name}>Andrea Rodriguez</Text>
        </View>
        <View style={styles.social}>
          <Icon name="facebook-square" size={35} color="#fff" />
          <Icon name="twitter-square" size={35} color="#fff" />
          <Icon name="discord" size={35} color="#fff" />
          <Icon name="instagram-square" size={35} color="#fff" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icons: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#242143",
    padding: 24,

    height: 350,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  user_information: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  user_image: {
    width: 150,
    height: 150,
    borderRadius: 999,
  },
  user_name: {
    color: "#fff",
    marginTop: 18,
    fontSize: 18,
    fontFamily: "poppins-light",
  },

  social: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

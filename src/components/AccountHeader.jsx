import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { ScrollView } from "react-native-gesture-handler";
import { useUser } from "../hooks/useUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function AccountHeader() {
  const { logout, user } = useUser();
  const navigation = useNavigation();
  const handleLogout = async () => logout();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icons}>
          <View>
            <Icon
              name="arrow-left"
              size={25}
              color="#fff"
              onPress={() => navigation.goBack()}
            />
          </View>
          <View>
            <Icon
              name="cog"
              size={25}
              color="#fff"
              onPress={() => navigation.navigate("Settings")}
            />
          </View>
        </View>
        <View style={styles.user_information}>
          <Image
            source={require("../assets/person1.jpg")}
            style={styles.user_image}
          />
          <Text style={styles.user_name}>{user?.username}</Text>
        </View>
        <View style={styles.social}>
          <Icon name="facebook-square" size={35} color="#fff" />
          <Icon name="twitter-square" size={35} color="#fff" />
          <Icon name="discord" size={35} color="#fff" />
          <Icon name="instagram-square" size={35} color="#fff" />
        </View>
        <Pressable style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Cerrar sesion</Text>
        </Pressable>
      </View>
    </ScrollView>
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
  logoutBtn: {
    backgroundColor: "#242143",
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  logoutText: {
    color: "#fff",
    fontFamily: "poppins-light",
  },
});

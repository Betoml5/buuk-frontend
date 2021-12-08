import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Icon from "react-native-vector-icons/FontAwesome5";
import Favorites from "../screens/Favorites";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import Search from "../components/Header";
import Library from "../screens/Library";
import Discover from "../screens/Discover";
import Buuk from "../screens/Buuk";

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => <Search />,
        tabBarStyle: styles.container,

        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#DDDCDE",
      }}
    >
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          tabBarLabel: "Inicio",

          tabBarIcon: () => renderHome(),
          headerShown: true,
        }}
      />

      <Tab.Screen
        component={Library}
        name="Library"
        options={{
          tabBarLabel: "Libreria",
          tabBarIcon: () => renderBooks(),
        }}
      />

      <Tab.Screen
        component={Buuk}
        name="Buuk"
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderBuuk(),
        }}
      />

      <Tab.Screen
        component={Discover}
        name="Discover"
        options={{
          tabBarLabel: "Descubre",
          tabBarIcon: () => renderDiscover(),
        }}
      />
      <Tab.Screen
        component={Discover}
        name="Account"
        options={{
          tabBarLabel: "Cuenta",
          tabBarIcon: () => renderAccount(),
        }}
      />
    </Tab.Navigator>
  );
}
const renderBuuk = () => (
  <Image
    source={require("../assets/buuk.png")}
    style={{ width: 70, height: 70 }}
  />
);

const renderHome = () => (
  <Image
    source={require("../assets/house.png")}
    style={{ width: 25, height: 25 }}
  />
);

const renderBooks = () => (
  <Image
    source={require("../assets/library.png")}
    style={{ width: 25, height: 25 }}
  />
);

const renderDiscover = () => (
  <Image
    source={require("../assets/discover.png")}
    style={{ width: 25, height: 25 }}
  />
);

const renderAccount = () => (
  <Image
    source={require("../assets/account.png")}
    style={{ width: 25, height: 25 }}
  />
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1736",
    borderTopWidth: 0,
  },
});

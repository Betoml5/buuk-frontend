import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";

import Favorites from "../screens/Favorites";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import Search from "../components/Search";
import Library from "../screens/Library";
import Discover from "../screens/Discover";
import Buuk from "../screens/Buuk";
import Account from "../screens/Account";
import AccountHeader from "../components/AccountHeader";

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
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
          header: () => <Search />,
          tabBarIcon: () => renderHome(),
          headerShown: true,
        }}
      />

      <Tab.Screen
        component={Library}
        name="Library"
        options={{
          headerShown: false,
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
        component={Account}
        name="Account"
        options={{
          header: () => <AccountHeader />,
          // headerShown: false,
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

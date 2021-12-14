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
import AccountNavigation from "./AccountNavigation";

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
          tabBarIcon: () => renderBooks(),
          tabBarLabel: "Biblioteca",
          headerTitleStyle: {
            color: "#fff",
            fontFamily: "poppins-semi",
          },
          headerShadowVisible: false,
          headerTitle: "Biblioteca",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#242143",
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            height: 100,
          },
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
          tabBarIcon: () => renderDiscover(),
          headerTitleStyle: {
            color: "#fff",
            fontFamily: "poppins-semi",
          },
          tabBarLabel: "Descubre",
          headerShadowVisible: false,
          headerTitle: "Descubre",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#242143",
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            height: 100,
          },
        }}
      />
      <Tab.Screen
        component={AccountNavigation}
        name="AccountNavigation"
        options={{
          tabBarLabel: "Cuenta",
          tabBarIcon: () => renderAccount(),
          headerShown: false,
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

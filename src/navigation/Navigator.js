import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";

import { Image, StyleSheet } from "react-native";
import Discover from "../screens/Discover";
import AccountNavigation from "./AccountNavigation";
import LibraryNavigation from "./LibraryNavigation";

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="LibraryNavigation"
        screenOptions={{
          tabBarStyle: styles.container,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: "#ccc",
          tabBarInactiveTintColor: "#fff",
        }}
      >
        <Tab.Screen
          component={Home}
          name="Home"
          options={{
            tabBarLabel: "Inicio",
            tabBarIcon: () => renderHome(),
            headerShown: false,
          }}
        />

        <Tab.Screen
          component={LibraryNavigation}
          name="LibraryNavigation"
          options={{
            headerShown: false,
            tabBarIcon: () => renderBooks(),
            tabBarLabel: "Biblioteca",
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
    </>
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
  header: {
    backgroundColor: "#242143",
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
    overflow: "hidden",
  },
  input: {
    padding: 6,
    width: "80%",
    backgroundColor: "#fff",
    borderTopRightRadius: 999,
    borderBottomRightRadius: 999,
    overflow: "hidden",
  },
});

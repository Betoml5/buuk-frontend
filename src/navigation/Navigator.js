import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Icon from "react-native-vector-icons/FontAwesome5";
import Favorites from "../screens/Favorites";
import { Button, Image, Pressable, Text } from "react-native";
import Search from "../components/Header";
import Library from "../screens/Library";

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: () => <Search />,
          tabBarStyle: {
            backgroundColor: "#252242",
          },
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
          name="Buuk"
          options={{
            tabBarLabel: "",
            tabBarIcon: () => renderBuuk(),
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
      </Tab.Navigator>
    </>
  );
}

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

const renderBuuk = () => (
  <Image
    source={require("../assets/buukicon.png")}
    style={{ width: 50, height: 50, marginBottom: 10 }}
  />
);

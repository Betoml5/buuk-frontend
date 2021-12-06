import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Icon from "react-native-vector-icons/FontAwesome5";
import Favorites from "../screens/Favorites";
import { Button, Pressable, Text } from "react-native";
import Search from "../components/Header";

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <>
      <Pressable
        style={{
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          zIndex: 99,
          bottom: 5,
          alignSelf: "center",
          shadowColor: "black",
          shadowOpacity: 0.15,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 8,
          elevation: 3,
          backgroundColor: "red",
          padding: 8,
          borderRadius: 999,
          width: 50,
          height: 50, //Because shadow only work on iOS, elevation is same thing but for android.
        }}
        onPress={() => console.log("ssws")}
      >
        <Text>Hola</Text>
      </Pressable>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: () => <Search />,
        }}
      >
        <Tab.Screen
          component={Home}
          name="Home"
          options={{
            tabBarLabel: "Inicio",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} solid={false} />
            ),
            headerShown: true,
          }}
        />

        <Tab.Screen
          component={Favorites}
          name="Favorites"
          options={{
            tabBarLabel: "Favoritos",
            headerTitle: "Favoritos",
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart" color={color} size={size} solid={false} />
            ),
            headerShown: true,
          }}
        />
      </Tab.Navigator>
    </>
  );
}

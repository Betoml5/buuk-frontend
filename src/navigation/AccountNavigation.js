import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account";
import Settings from "../screens/Settings";
import AccountHeader from "../components/AccountHeader";
import { useUser } from "../hooks/useUser";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import ForgotPassword from "../components/ForgotPassword";
import Icon from "react-native-vector-icons/FontAwesome5";

import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";
const Stack = createStackNavigator();

export default function AccountNavigation() {
  const { isLogged } = useUser();

  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      {isLogged ? (
        <>
          <Stack.Screen
            name="Account"
            component={Account}
            options={{ title: "Mi cuenta", header: () => <AccountHeader /> }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              title: "Configuracion",
              headerShadowVisible: false,
              headerTintColor: "#fff",
              headerTitleStyle: { color: "#fff" },
              headerStyle: { backgroundColor: "#1A1736" },
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              title: "",
              headerLeft: () => (
                <Icon
                  name="arrow-left"
                  color={"#fff"}
                  onPress={() => navigation.navigate("Signin")}
                  style={{ marginLeft: 20 }}
                  size={20}
                />
              ),
              headerShadowVisible: false,
              headerTintColor: "#fff",
              headerTitleStyle: { color: "#fff" },
              headerStyle: { backgroundColor: "#1A1736" },
            }}
          />

          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

const renderArrowBack = () => (
  <Image
    source={require("../assets/arrow.png")}
    style={{ width: 25, height: 25 }}
  />
);

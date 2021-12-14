import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account";
import Settings from "../screens/Settings";
import AccountHeader from "../components/AccountHeader";
const Stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
}

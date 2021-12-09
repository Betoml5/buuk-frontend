import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account";
import Settings from "../screens/Settings";
const Stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ title: "Mi cuenta", headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Configuracion" }}
      />
    </Stack.Navigator>
  );
}

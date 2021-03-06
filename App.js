import React, { useState } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserContextProvider } from "./src/context/UserContext";
import { initAxiosInterceptors } from "./src/services/auth/auth-helpers";
import AppLoading from "expo-app-loading";
import Navigator from "./src/navigation/Navigator";
import * as Font from "expo-font";

const fetchFonts = () => {
  return Font.loadAsync({
    "poppins-bold": require("./src/assets/fonts/Poppins/Poppins-Bold.ttf"),
    "poppins-semi": require("./src/assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "poppins-light": require("./src/assets/fonts/Poppins/Poppins-Light.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#1A1736",
    },
  };

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    );
  }

  initAxiosInterceptors();
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <UserContextProvider>
          <Navigator />
        </UserContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

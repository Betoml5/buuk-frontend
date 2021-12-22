import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { UserContextProvider } from "./src/context/userContext";
import Navigator from "./src/navigation/Navigator";

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

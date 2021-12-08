import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import React, { useState } from "react";
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
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

export default function TimelineForm(props) {
  const navigation = useNavigation();
  console.log(props);
  return (
    <View>
      <Text>Agregar al hilo</Text>
    </View>
  );
}

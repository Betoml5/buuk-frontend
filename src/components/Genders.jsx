import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { FlatList } from "react-native";
import { genders } from "../../genders";
import { useBook } from "../hooks/useBook";

export default function Genders({ setBooks }) {
  const { searchBooksBySubject } = useBook();

  const onPress = async (subject) => {
    try {
      const response = await searchBooksBySubject(subject);
      setBooks(response);
      console.log(subject);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlatList
          data={genders}
          keyExtractor={(item) => item.id}
          numColumns={Math.ceil(genders.length / 2)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              style={styles.item}
              onPress={() => onPress(item.name)}
              key={"#"}
            >
              <View style={styles.imageContainer}>
                <Image source={item.image} style={{ width: 14, height: 14 }} />
              </View>
              <Text style={styles.itemText}>{item.name}</Text>
            </Pressable>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  item: {
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginRight: 10,
    marginTop: 10,
  },
  imageContainer: {
    backgroundColor: "#fff",
    borderRadius: 999,
    padding: 4,
  },
  itemText: {
    fontSize: 12,
    marginLeft: 4,
    fontFamily: "poppins-light",
  },
});

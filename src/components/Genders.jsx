import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { FlatList } from "react-native";
import { genders } from "../../genders";

export default function Genders() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlatList
          key={"#"}
          data={genders}
          keyExtractor={(item) => item.id}
          numColumns={Math.ceil(genders.length / 2)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={{ width: 14, height: 14 }} />
              </View>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
  },
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

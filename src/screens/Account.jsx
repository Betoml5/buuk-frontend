import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { useUser } from "../hooks/useUser";

export default function Account() {
  const { user, jwt } = useUser();
  return (
    <View style={styles.container}>
      <ScrollView>
        {user?.library?.length > 0 ? (
          <>
            <Text style={styles.reading_title}>Leyendo</Text>

            <FlatList
              renderItem={({ item }) => (
                <Image source={{ uri: item?.cover }} style={styles.book} />
              )}
              horizontal={true}
              data={user?.library}
              keyExtractor={(item) => item.id}
              nestedScrollEnabled
            />
          </>
        ) : (
          <Text>Aun no estas leyendo nada :(</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  reading_title: {
    color: "#fff",
    fontFamily: "poppins-semi",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },

  book: {
    width: 100,
    height: 160,
    borderRadius: 8,
    marginRight: 10,
  },
});

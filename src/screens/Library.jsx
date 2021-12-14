import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Library() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  source={require("../assets/close.png")}
                  style={styles.closeIcon}
                />
              </Pressable>
              <Text style={styles.modalTitle}>Agregar libro</Text>
            </View>
          </View>
        </Modal>
        <Text style={styles.title}>Objetivos de biblioteca</Text>

        <View style={styles.goals_container}>
          <View style={styles.pages}>
            <Image
              source={require("../assets/pages.png")}
              style={{ width: 50, height: 50 }}
            />
            <Text style={styles.number_pages}>324</Text>
            <Text style={styles.number_pages_text}>
              Paginas leidas este mes
            </Text>
          </View>

          <View style={styles.books}>
            <Image
              source={require("../assets/bookreads.png")}
              style={{ width: 50, height: 50, padding: 0, margin: 0 }}
            />
            <Text style={styles.number_books}>34</Text>
            <Text style={styles.number_books_text}>Libros leidos este mes</Text>
          </View>
        </View>
        <View style={styles.crud}>
          <Pressable onPress={() => setModalVisible(true)}>
            <Image
              source={require("../assets/add.png")}
              style={styles.crudIcon}
            />
          </Pressable>
          <View>
            <Image
              source={require("../assets/trash.png")}
              style={styles.crudIcon}
            />
          </View>
        </View>
        <View style={styles.containerTimeline}>
          <View style={styles.timelineItem}>
            {/* Fecha de arriba */}
            <View style={styles.datetime}>
              <Text style={styles.date}>08</Text>
              <Text style={styles.day}>Ayer</Text>
            </View>

            <View style={styles.booksContainer}>
              <View style={styles.booksWrapper}>
                <View style={styles.bookInfo}>
                  <Image
                    source={require("../assets/book-cover-1.jpg")}
                    style={styles.book}
                  />
                  <View style={styles.bookDescription}>
                    <Text style={styles.bookName}>
                      Beautiful world where are you
                    </Text>
                    <Text style={styles.bookGender}>Ficción</Text>
                  </View>
                </View>
                <View style={styles.numberPagesContainer}>
                  <Image
                    source={require("../assets/pagesWhite.png")}
                    style={styles.bookPagesIcon}
                  />
                  <Text style={styles.numberPagesDay}>24</Text>
                </View>
              </View>
              <View style={styles.booksWrapper}>
                <View style={styles.bookInfo}>
                  <Image
                    source={require("../assets/book-cover-1.jpg")}
                    style={styles.book}
                  />
                  <View style={styles.bookDescription}>
                    <Text style={styles.bookName}>
                      Beautiful world where are you
                    </Text>
                    <Text style={styles.bookGender}>Ficción</Text>
                  </View>
                </View>
                <View style={styles.numberPagesContainer}>
                  <Image
                    source={require("../assets/pagesWhite.png")}
                    style={styles.bookPagesIcon}
                  />
                  <Text style={styles.numberPagesDay}>24</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.timelineItem}>
            {/* Fecha de arriba */}
            <View style={styles.datetime}>
              <Text style={styles.date}>09</Text>
              <Text style={styles.day}>Hoy</Text>
            </View>

            <View style={styles.booksContainer}>
              <View style={styles.booksWrapper}>
                <View style={styles.bookInfo}>
                  <Image
                    source={require("../assets/book-cover.jpg")}
                    style={styles.book}
                  />
                  <View style={styles.bookDescription}>
                    <Text style={styles.bookName}>
                      Beautiful world where are you
                    </Text>
                    <Text style={styles.bookGender}>Ficción</Text>
                  </View>
                </View>
                <View style={styles.numberPagesContainer}>
                  <Image
                    source={require("../assets/pagesWhite.png")}
                    style={styles.bookPagesIcon}
                  />
                  <Text style={styles.numberPagesDay}>12</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.timelineItem}>
            {/* Fecha de arriba */}
            <View style={styles.datetime}>
              <Text style={styles.date}>09</Text>
              <Text style={styles.day}>Hoy</Text>
            </View>

            <View style={styles.booksContainer}>
              <View style={styles.booksWrapper}>
                <View style={styles.bookInfo}>
                  <Image
                    source={require("../assets/book-cover.jpg")}
                    style={styles.book}
                  />
                  <View style={styles.bookDescription}>
                    <Text style={styles.bookName}>
                      Beautiful world where are you
                    </Text>
                    <Text style={styles.bookGender}>Ficción</Text>
                  </View>
                </View>
                <View style={styles.numberPagesContainer}>
                  <Image
                    source={require("../assets/pagesWhite.png")}
                    style={styles.bookPagesIcon}
                  />
                  <Text style={styles.numberPagesDay}>12</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    color: "#fff",
    fontFamily: "poppins-bold",
    fontSize: 18,
    marginBottom: 12,
  },
  pages: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
    width: 150,
    borderRadius: 8,
    backgroundColor: "#312C44",
    marginRight: 20,
  },
  number_pages: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: "poppins-bold",
    color: "#D8C6A5",
  },
  number_pages_text: {
    fontFamily: "poppins-semi",
    color: "#D8C6A5",
  },
  books: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "rgba(119, 224,181,0.2)",
    opacity: 20,
    borderRadius: 8,
    padding: 20,
    width: 150,
  },
  number_books: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: "poppins-bold",
    color: "#62BF7C",
    marginLeft: 2,
  },
  number_books_text: {
    fontFamily: "poppins-semi",
    color: "#62BF7C",
    marginLeft: 2,
  },
  goals_container: {
    flexDirection: "row",
  },
  containerTimeline: {
    padding: 20,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: "#322F4C",
  },
  timelineItem: {
    marginTop: 10,
  },
  datetime: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",

    padding: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    fontSize: 12,
    fontFamily: "poppins-semi",
  },
  day: {
    color: "#fff",
    fontFamily: "poppins-semi",
    marginLeft: 12,
  },
  booksContainer: {
    borderLeftWidth: 2,
    borderColor: "#3F3D58",
    marginLeft: 18,
    marginTop: 10,
  },
  book: {
    width: 63,
    height: 100,
    borderRadius: 12,
    marginLeft: 20,
  },

  bookInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  bookDescription: {
    marginLeft: 10,
    width: "50%",
  },
  bookName: {
    color: "#fff",
    fontFamily: "poppins-semi",
  },
  bookGender: {
    color: "#888797",
    fontFamily: "poppins-light",
  },
  booksWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  numberPagesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  bookPagesIcon: {
    width: 20,
    height: 20,
  },
  numberPagesDay: {
    color: "#fff",
    fontFamily: "poppins-semi",
    marginLeft: 10,
    fontSize: 12,
  },
  modalContainer: {
    backgroundColor: "#322F4C",
    height: "100%",
    opacity: 0.9,
    borderRadius: 24,
    padding: 20,
    position: "relative",
  },
  crud: {
    flexDirection: "row",
    backgroundColor: "#322F4C",
    padding: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  crudIcon: {
    width: 32,
    height: 32,
  },
  modalTitle: {
    color: "#fff",
    fontFamily: "poppins-semi",
    fontSize: 20,
  },
  closeIcon: {
    position: "relative",
    right: 0,
    width: 32,
    height: 32,
  },
  modalHeader: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
});

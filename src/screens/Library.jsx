import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  TextInput,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../hooks/useUser";
import { searchBook } from "../services/Book";

export default function Library() {
  const { addToLibrary, removeFromLibrary, addItemToTimeline, user, setUser } =
    useUser();
  const [modalVisible, setModalVisible] = useState(false);
  const [timelineModal, setTimelineModal] = useState(false);
  const [searchedBooks, setSearchesBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");

  const navigatior = useNavigation();
  const handleSearch = async (title) => {
    try {
      setLoading(true);
      const books = await searchBook(title);
      setSearchesBooks(books);
      setLoading(false);
    } catch (error) {
      setTitle("");
      setSearchesBooks(null);
    }
  };

  const handleAddToLibrary = async (id, bookId) => {
    try {
      const newUser = await addToLibrary(id, bookId);
      setUser(newUser);
    } catch (error) {
      return error;
    }
  };

  const handleRemoveFromLibrary = async (id, bookId) => {
    try {
      const newUser = await removeFromLibrary(id, bookId);
      setUser(newUser);
    } catch (error) {
      return error;
    }
  };

  const handleAddPages = async () => {
    try {
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Pressable
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setSearchesBooks([]);
                }}
              >
                <Image
                  source={require("../assets/close.png")}
                  style={styles.closeIcon}
                />
              </Pressable>
              <Text style={styles.modalTitle}>Agregar libro</Text>
            </View>
            <View style={styles.searchContainer}>
              <TextInput
                placeholder="Titulo del libro"
                style={styles.inputText}
                onChangeText={(text) => setTitle(text)}
                defaultValue={title}
              />
              <Pressable
                title="Buscar"
                style={styles.btn}
                onPress={() => handleSearch(title)}
                disabled={!title}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#fff",
                    fontFamily: "poppins-semi",
                    borderRadius: 8,
                  }}
                >
                  Buscar
                </Text>
              </Pressable>

              {loading ? (
                <ActivityIndicator
                  size="large"
                  color="#fff"
                  style={{ marginTop: 50 }}
                />
              ) : (
                <FlatList
                  style={{ marginTop: 20 }}
                  data={searchedBooks}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <View key={item.id} style={{ marginRight: 12 }}>
                      <Image
                        source={{ uri: item.cover }}
                        style={{
                          width: 150,
                          height: 230,
                          borderRadius: 8,
                          resizeMode: "cover",
                        }}
                      />
                      {user?.library?.find(
                        (book) => book.id === item.work_id
                      ) ? (
                        <Pressable
                          style={{
                            marginTop: 10,
                            backgroundColor: "#242143",
                            padding: 8,
                            borderRadius: 8,
                          }}
                          onPress={() =>
                            handleRemoveFromLibrary(user?._id, item?.work_id)
                          }
                        >
                          <Text
                            style={{
                              textAlign: "center",
                              color: "#fff",
                              fontFamily: "poppins-light",
                              fontSize: 12,
                            }}
                          >
                            Remover de la biblioteca
                          </Text>
                        </Pressable>
                      ) : (
                        <Pressable
                          style={{
                            marginTop: 10,
                            backgroundColor: "#242143",
                            padding: 8,
                            borderRadius: 8,
                          }}
                          onPress={() =>
                            handleAddToLibrary(user?._id, item?.work_id)
                          }
                        >
                          <Text
                            style={{
                              textAlign: "center",
                              color: "#fff",
                              fontFamily: "poppins-light",
                              fontSize: 12,
                            }}
                          >
                            Agregar a la biblioteca
                          </Text>
                        </Pressable>
                      )}
                    </View>
                  )}
                  horizontal={true}
                />
              )}
            </View>
          </SafeAreaView>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={timelineModal}
          onRequestClose={() => {
            setTimelineModal(false);
          }}
        >
          <SafeAreaView style={styles.modalContainer}>
            <ScrollView>
              <View style={styles.modalHeader}>
                <Pressable
                  onPress={() => {
                    setTimelineModal(true);
                  }}
                >
                  <Image
                    source={require("../assets/close.png")}
                    style={styles.closeIcon}
                  />
                </Pressable>
                <Text style={styles.modalTitle}>Agregar al hilo</Text>
              </View>
              <View style={styles.searchContainer}>
                {loading ? (
                  <ActivityIndicator
                    size="large"
                    color="#fff"
                    style={{ marginTop: 50 }}
                  />
                ) : (
                  <FlatList
                    style={{ marginTop: 20 }}
                    data={user?.library}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                      <View key={item.id} style={{ marginRight: 12 }}>
                        <Image
                          source={{ uri: item.cover }}
                          style={{
                            width: 150,
                            height: 230,
                            borderRadius: 8,
                            resizeMode: "cover",
                          }}
                        />
                        <Pressable
                          style={styles.btn}
                          onPress={() => {
                            setTimelineModal(false);
                            navigatior.navigate("LibraryNavigation", {
                              screen: "TimelineForm",
                              params: { book: item },
                            });
                          }}
                        >
                          <Text
                            style={{
                              textAlign: "center",
                              color: "#fff",
                              fontFamily: "poppins-light",
                              fontSize: 12,
                            }}
                          >
                            Agregar
                          </Text>
                        </Pressable>
                        <View
                          style={{
                            position: "absolute",
                            backgroundColor: "#fff",
                            padding: 20,
                            flexDirection: "row",
                          }}
                        >
                          <Pressable>
                            <Text style={{ fontSize: 24 }}>+</Text>
                          </Pressable>
                          <Text
                            style={{
                              marginRight: 20,
                              marginLeft: 20,
                              fontSize: 24,
                            }}
                          >
                            {item?.numberPages}
                          </Text>
                          <Pressable>
                            <Text style={{ fontSize: 24 }}>-</Text>
                          </Pressable>
                        </View>
                      </View>
                    )}
                    horizontal={true}
                  />
                )}
              </View>
            </ScrollView>
          </SafeAreaView>
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
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.crudIconContainer}
          >
            <Image
              source={require("../assets/addbook.png")}
              style={styles.crudIcon}
            />
          </Pressable>
          <Pressable
            style={styles.crudIconContainer}
            onPress={() => setTimelineModal(true)}
          >
            <Image
              source={require("../assets/add.png")}
              style={styles.crudIcon}
            />
          </Pressable>
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
    overflow: "hidden",
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
    padding: 20,
    position: "relative",
  },
  crud: {
    flexDirection: "row",
    borderRadius: 8,
    marginTop: 10,
  },
  crudIcon: {
    width: 30,
    height: 30,

    alignSelf: "center",
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
  crudIconContainer: {
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#322F4C",
    padding: 20,
    marginRight: 12,
    borderRadius: 8,
  },
  inputText: {
    padding: 8,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 6,
    marginTop: 20,
  },
  btn: {
    padding: 16,
    width: "100%",
    borderRadius: 8,
    marginTop: 20,
    backgroundColor: "#242143",
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "column",
  },
});

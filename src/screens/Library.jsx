import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
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
import Book from "../components/Book";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../hooks/useUser";
import { searchBook } from "../services/Book";

export default function Library() {
  const { addToLibrary, removeFromLibrary, user } = useUser();
  const [modalVisible, setModalVisible] = useState(false);
  const [timelineModal, setTimelineModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchedBooks, setSearchesBooks] = useState([]);
  const [title, setTitle] = useState("");

  const navigation = useNavigation();
  const handleSearch = async (title) => {
    try {
      setLoading(true);
      const books = await searchBook(title);
      setSearchesBooks(books);
      setLoading(false);

      if (books.totalItems === 0) {
        Alert.alert(
          "No encontramos resultados",
          "No encontramos el titulo que buscaste"
        );
      }
    } catch (error) {
      setTitle("");
      setSearchesBooks(null);
    }
  };

  const handleAddToLibrary = async (bookId) => {
    try {
      await addToLibrary(bookId);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleRemoveFromLibrary = async (bookId) => {
    try {
      await removeFromLibrary(bookId);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
                  nestedScrollEnabled
                  style={{ marginTop: 20 }}
                  data={searchedBooks}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item, index }) => (
                    <View key={item.id} style={{ marginRight: 12 }}>
                      <Book image={item.images?.thumbnail} info={item} />

                      {user?.library?.find((book) => book.id === item.id) ? (
                        <Pressable
                          style={{
                            marginTop: 10,
                            backgroundColor: "#242143",
                            padding: 8,
                            borderRadius: 8,
                          }}
                          onPress={() =>
                            handleRemoveFromLibrary(user?._id, item?.id)
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
                          onPress={() => handleAddToLibrary(item?.id)}
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
            <View style={styles.modalHeader}>
              <Pressable
                onPress={() => {
                  setTimelineModal(false);
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
              {user?.library?.length === 0 ? (
                <View style={styles.noBooksContainer}>
                  <Text style={styles.noBooksText}>
                    Aun no tienes nada en la biblioteca
                  </Text>
                </View>
              ) : (
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  style={{ marginTop: 20 }}
                  data={user?.library}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <View key={item.id} style={{ marginRight: 12 }}>
                      <Book image={item.images.thumbnail} info={item} />
                      <Pressable
                        style={styles.btn}
                        onPress={() => {
                          setTimelineModal(false);
                          navigation.navigate("LibraryNavigation", {
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
                    </View>
                  )}
                  horizontal={true}
                />
              )}
            </View>
          </SafeAreaView>
        </Modal>
        <Text style={styles.title}>Objetivos de biblioteca</Text>
        <View style={{ width: "100%" }}>
          <View style={styles.goals_container}>
            <View style={styles.pages}>
              <Image
                source={require("../assets/pages.png")}
                style={{ width: 50, height: 50 }}
              />
              <Text style={styles.number_pages}>{user?.pagescount}</Text>
              <Text style={styles.number_pages_text}>Paginas leidas</Text>
            </View>

            <View style={styles.books}>
              <Image
                source={require("../assets/bookreads.png")}
                style={{ width: 50, height: 50, padding: 0, margin: 0 }}
              />
              <Text style={styles.number_books}>{user?.library?.length}</Text>
              <Text style={styles.number_books_text}>Libros leidos</Text>
            </View>
          </View>
          <View style={styles.crud}>
            <View style={{ flexDirection: "row", width: "50%" }}>
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                style={[
                  styles.crudIconContainer,
                  { width: "44%", marginRight: 4 },
                ]}
              >
                <Image
                  source={require("../assets/addbook.png")}
                  style={styles.crudIcon}
                />
              </Pressable>
              <Pressable
                style={[styles.crudIconContainer, { width: "45%" }]}
                onPress={() => setTimelineModal(!modalVisible)}
              >
                <Image
                  source={require("../assets/add.png")}
                  style={styles.crudIcon}
                />
              </Pressable>
            </View>
            <Pressable
              style={[styles.crudIconContainer, { width: "45%" }]}
              onPress={() =>
                navigation.navigate("LibraryNavigation", {
                  screen: "Goals",
                })
              }
            >
              <Image
                source={require("../assets/bar-chart.png")}
                style={styles.crudIcon}
              />
            </Pressable>
          </View>
        </View>

        {user?.timeline?.length > 0 ? (
          <View style={styles.containerTimeline}>
            {user?.timeline.map((item, index) => (
              <View style={styles.timelineItem} key={index}>
                <View style={styles.datetime}>
                  <Text style={styles.date}>{item.date}</Text>
                  <Text style={styles.day}>{item.fullDate}</Text>
                </View>

                {item?.items?.map((item, index) => (
                  <View style={styles.booksContainer} key={index}>
                    <View style={styles.booksWrapper}>
                      <View style={styles.bookInfo}>
                        <Image
                          source={{ uri: item?.book?.cover }}
                          style={styles.book}
                        />
                        <View style={styles.bookDescription}>
                          <Text
                            style={styles.bookName}
                            numberOfLines={2}
                            ellipsizeMode="tail"
                          >
                            {item?.book?.title}
                          </Text>
                          {!item.book.category ? (
                            <Text style={styles.bookGender}>Sin categoria</Text>
                          ) : (
                            <Text
                              style={styles.bookGender}
                              ellipsizeMode="tail"
                              numberOfLines={2}
                            >
                              {item.book.category}
                            </Text>
                          )}
                        </View>
                      </View>
                      <View style={styles.numberPagesContainer}>
                        <Image
                          source={require("../assets/pagesWhite.png")}
                          style={styles.bookPagesIcon}
                        />
                        <Text style={styles.numberPagesDay}>
                          {item?.book?.numberPages}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </View>
        ) : (
          <View
            style={{
              backgroundColor: "#322F4C",
              marginTop: 20,
              borderRadius: 8,
              padding: 20,
            }}
          >
            <Text style={styles.title}>
              Hey, aun no tienes ningun libro en el hilo
            </Text>
            <Text
              onPress={() => setTimelineModal(true)}
              style={[
                {
                  color: "#fff",
                  fontFamily: "poppins-semi",
                  fontSize: 18,
                  textAlign: "center",
                },
                styles.btn,
              ]}
            >
              Agregar
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 20,
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
    width: "45%",
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
    width: "45%",
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
    justifyContent: "space-between",
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
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    padding: 12,
    width: 40,
    height: 40,
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
    width: "45%",
  },
  bookName: {
    color: "#fff",
    fontFamily: "poppins-semi",
    fontSize: 12,
  },
  bookGender: {
    color: "#888797",
    fontFamily: "poppins-light",
    fontSize: 12,
    marginTop: 4,
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
    marginLeft: 4,
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
    justifyContent: "space-between",
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
    justifyContent: "space-around",
    backgroundColor: "#322F4C",
    padding: 20,

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
  noBooksText: {
    color: "#fff",
    fontFamily: "poppins-semi",
    marginTop: 20,
    fontSize: 24,
  },
});

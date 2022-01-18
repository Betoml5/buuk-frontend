import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { ScrollView } from "react-native-gesture-handler";
import { useUser } from "../hooks/useUser";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as ImagePicker from "expo-image-picker";
import storage from "../services/firebase/index";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function AccountHeader() {
  const { logout, user, update, setUser } = useUser();
  const navigation = useNavigation();
  const handleLogout = async () => logout();
  const [image, setImage] = useState(null);
  const [view, setView] = useState(false);
  const [progress, setProgress] = useState(0);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const handleUpload = async (uri, imageName) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const storageRef = ref(storage, `images/${imageName}`);
      const uploadTask = uploadBytesResumable(storageRef, blob);
      const url = await getDownloadURL(uploadTask.snapshot.ref);
      const progressData =
        (uploadTask.snapshot.bytesTransferred /
          uploadTask.snapshot.totalBytes) *
        100;
      setProgress(progressData);
      const userModified = {
        ...user,
        image: url,
      };

      setView(false);
      setImage(null);
      setProgress(0);

      update(user?._id, userModified).then(() => {
        setView(false);
        setImage(null);
        setProgress(0);
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icons}>
          <View>
            <Icon
              name="cog"
              size={25}
              color="#fff"
              onPress={() => navigation.navigate("Settings")}
            />
          </View>
        </View>
        <View style={styles.user_information}>
          {image ? (
            <Image source={{ uri: image }} style={styles.user_image} />
          ) : (
            <Image
              source={
                !user?.image
                  ? require("../assets/user.png")
                  : { uri: user?.image }
              }
              style={styles.user_image}
            />
          )}
          <Text style={styles.user_name}>{user?.username}</Text>

          {view && (
            <>
              <View style={{ flexDirection: "row" }}>
                <Pressable
                  onPress={pickImage}
                  style={[styles.logoutBtn, { marginRight: 10 }]}
                >
                  <Text style={styles.logoutText}>Escoger imagen</Text>
                </Pressable>
                <Pressable
                  disabled={!image}
                  style={!image ? styles.btnDisabled : styles.logoutBtn}
                  onPress={() => {
                    handleUpload(image, "test-image-2");
                  }}
                >
                  <Text style={styles.logoutText}>Subir imagen</Text>
                </Pressable>
              </View>
              <Pressable
                style={styles.logoutBtn}
                onPress={() => setView(false)}
              >
                <Text style={styles.logoutText}>Cancelar</Text>
              </Pressable>
            </>
          )}
        </View>
        {progress > 0 && (
          <View
            style={{
              width: progress,
              height: 10,
              borderRadius: 999,
              backgroundColor: "#242143",
            }}
          ></View>
        )}
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {!view && (
            <Pressable
              style={[styles.logoutBtn, { marginRight: 10 }]}
              onPress={() => setView(true)}
            >
              <Text style={styles.logoutText}>Cambiar imagen</Text>
            </Pressable>
          )}
          <Pressable style={styles.logoutBtn} onPress={handleLogout}>
            <Text style={styles.logoutText}>Cerrar sesion</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  icons: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  header: {
    backgroundColor: "#242143",
    padding: 24,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  user_information: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  user_image: {
    width: 150,
    height: 150,
    borderRadius: 999,
  },
  user_name: {
    color: "#fff",
    marginTop: 18,
    fontSize: 18,
    fontFamily: "poppins-light",
  },

  social: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logoutBtn: {
    backgroundColor: "#242143",
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnDisabled: {
    backgroundColor: "#322F4C",
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  logoutText: {
    color: "#fff",
    fontFamily: "poppins-light",
  },
});

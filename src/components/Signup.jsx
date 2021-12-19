import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Controller, useController, useForm } from "react-hook-form";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Signup() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => Alert.alert(JSON.stringify(data));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>¡Hola!</Text>
      <Text style={styles.subtitle}>Bienvenido a buuk</Text>

      <Image source={require("../assets/buuk.png")} style={styles.image} />

      <Text style={styles.label}>Nombre de usuario</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Nombre de usuario"
          />
        )}
        name="username"
      />
      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Correo electronico"
          />
        )}
        name="email"
      />
      <Text style={styles.label}>Contraseña</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Contraseña"
          />
        )}
        name="password"
      />
      <Pressable style={styles.btn} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.btnText}>Registrarse</Text>
      </Pressable>

      <View style={styles.signupContainer}>
        <Text style={styles.signinText}>
          ¿Ya tienes cuenta?{" "}
          <Text
            style={styles.signinLink}
            onPress={() => navigation.navigate("Signin")}
          >
            Inicia sesión
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 8,
    width: "100%",
    borderRadius: 4,
  },
  title: {
    fontSize: 24,
    fontFamily: "poppins-semi",
    color: "#fff",
  },
  subtitle: {
    color: "#fff",
    fontFamily: "poppins-light",
  },
  label: {
    marginTop: 12,
    fontSize: 14,
    color: "#fff",
    fontFamily: "poppins-semi",
    textAlign: "left",
    alignSelf: "flex-start",
  },
  btn: {
    marginTop: 12,
    backgroundColor: "#242143",
    padding: 12,
    borderRadius: 8,
    width: "100%",
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "poppins-semi",

    fontSize: 18,
  },
  image: {
    width: 150,
    height: 150,
  },
  signupContainer: {
    marginTop: 18,
  },
  signinLink: {
    color: "#1963d1",
  },
  signinText: {
    color: "#fff",
    fontFamily: "poppins-semi",
  },
});

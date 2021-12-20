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
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../hooks/useUser";

export default function Signin() {
  const navigation = useNavigation();
  const { login, hasError, isLoading } = useUser();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => await login(data);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>¡Hola!</Text>
      <Text style={styles.subtitle}>Bienvenido de vuelta, te extrañamos</Text>

      <Image source={require("../assets/buuk.png")} style={styles.image} />

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
      {errors.email && (
        <Text
          style={{
            color: "#fff",
            fontFamily: "poppins-light",
            fontSize: 12,
            textAlign: "left",
            alignSelf: "flex-start",
            marginTop: 10,
          }}
        >
          Este campo es obligatorio
        </Text>
      )}
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
      {errors.password && (
        <Text
          style={{
            color: "#fff",
            fontFamily: "poppins-light",
            fontSize: 12,
            textAlign: "left",
            alignSelf: "flex-start",
            marginTop: 10,
          }}
        >
          Este campo es obligatorio
        </Text>
      )}
      <Pressable style={styles.btn} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.btnText}>Iniciar sesion</Text>
      </Pressable>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>
          ¿Eres nuevo en Buuk?{" "}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate("Signup")}
          >
            Registrate
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

    fontSize: 16,
  },
  image: {
    width: 150,
    height: 150,
  },
  signupContainer: {
    marginTop: 18,
  },
  signupLink: {
    color: "#1963d1",
  },
  signupText: {
    color: "#fff",
    fontFamily: "poppins-semi",
  },
});

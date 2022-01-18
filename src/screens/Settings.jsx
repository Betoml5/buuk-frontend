import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useUser } from "../hooks/useUser";

export default function Settings() {
  const { user, update, isLoading, stateMsg } = useUser();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      username: user.username,
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const userModified = {
      ...user,
      username: data.username,
      password: data.password,
    };

    update(user._id, userModified);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hey! {user.username}</Text>
      <View style={styles.info}>
        <Text style={styles.title}>Actualizar datos</Text>
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
        {errors.username && (
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
              secureTextEntry
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
        {isLoading && (
          <ActivityIndicator
            size="large"
            color="#fff"
            style={{
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              height: "10%",
            }}
          />
        )}
        {stateMsg !== "" && <Text style={styles.errorText}>{stateMsg}</Text>}
        <Pressable style={styles.btn} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.btnText}>Actualizar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontFamily: "poppins-semi",
    color: "#Fff",
    fontSize: 20,
  },
  label: {
    marginTop: 4,
    fontSize: 14,
    color: "#fff",
    fontFamily: "poppins-semi",
    textAlign: "left",
    alignSelf: "flex-start",
  },
  input: {
    backgroundColor: "#fff",
    marginTop: 6,
    padding: 8,
    width: "100%",
    borderRadius: 4,
  },
  info: {
    marginTop: 24,
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
  errorText: {
    color: "#fff",
    marginTop: 10,
    fontFamily: "poppins-light",
  },
});

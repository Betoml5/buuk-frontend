import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Recupera tu contraseña</Text>

        <View>
          <Text style={styles.label}>Correo electronico</Text>
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
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: "poppins-semi",
    color: "#fff",
  },
  input: {
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 8,
    width: "100%",
    borderRadius: 4,
  },
  label: {
    fontSize: 14,
    color: "#fff",
  },
});

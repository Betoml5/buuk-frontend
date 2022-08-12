import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";
import { useAuth } from "../hooks/useAuth";

export default function ForgotPassword() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const { sendRecoveryEmail, state } = useAuth();

  const onSubmit = async (data) => {
    await sendRecoveryEmail(data.email);
    reset();
  };

  return (
    <View>
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
          <Text style={{ color: "#4caf50", fontWeight: "bold", marginTop: 10 }}>
            {state.message && "Verifica tu bandeja de entrada."}
          </Text>
          <Pressable style={styles.btn} onPress={handleSubmit(onSubmit)}>
            {state.loading ? (
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
            ) : (
              <Text style={styles.btnText}>Enviar email</Text>
            )}
          </Pressable>
        </View>
      </View>
    </View>
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
  btn: {
    marginTop: 12,
    backgroundColor: "#242143",
    padding: 18,
    borderRadius: 8,
    width: "100%",
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "poppins-semi",
    fontSize: 16,
  },
});

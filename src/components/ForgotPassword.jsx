import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";

export default function ForgotPassword() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const {} = use;

  const onSubmit = async (data) => {
    console.log(data);
  };

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
          <Pressable style={styles.btn} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.btnText}>Iniciar sesion</Text>
          </Pressable>
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
});

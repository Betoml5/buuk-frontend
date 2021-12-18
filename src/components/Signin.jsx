import React from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { View, Text, TextInput, Alert } from "react-native";

export default function Signin() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => Alert.alert(JSON.stringify(data));

  const Input = ({ name, control, rules }) => {
    const { field } = useController({
      control,
      defaultValue: "",
      name,
      rules,
    });
    return (
      <TextInput
        value={field.value}
        onChangeText={field.onChange}
        rules={{
          required: true,
        }}
      />
    );
  };

  return (
    <View>
      <Input name="email" control={control} />
    </View>
  );
}

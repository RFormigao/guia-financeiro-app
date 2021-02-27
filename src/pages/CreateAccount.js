import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreateAccount({ navigation }) {
  const [name, setName] = useState("");

  async function onSubmitEditing() {
    try {
      const user = JSON.stringify({ name: name });
      await AsyncStorage.setItem("@user", user);
      navigation.navigate("Main");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, vamos começar!</Text>
      <TextInput
        style={styles.inputName}
        value={name}
        multiline
        blurOnSubmit
        clearTextOnFocus
        textAlignVertical="top"
        placeholder="Qual o seu nome?"
        placeholderTextColor="#D8C6F8"
        onChangeText={(text) => setName(text)}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7d40e7",
    paddingTop: 50,
    paddingLeft: 40,
    paddingRight: 40,
  },
  title: {
    marginBottom: 30,
    maxWidth: 250,
    fontSize: 48,
    fontWeight: "700",
    color: "#fff",
  },
  inputName: {
    paddingVertical: 20,
    fontSize: 24,
    color: "#D8C6F8",
  },
});

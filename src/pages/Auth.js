import React, { useEffect } from "react";
import { StyleSheet, View, Text} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Auth({ navigation: { navigate } }) {

  useEffect(() => {
    async function getData() {
      try {
        const userStorage = await AsyncStorage.getItem("@user");

        if (userStorage) {
          navigate('Main', { userStorage: JSON.parse(userStorage) })
        } else {
          navigate("CreateAccount");
        }
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7d40e7",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  title: {
    fontSize: 48,
    fontWeight: "700",
    color: "#fff",
  },
});

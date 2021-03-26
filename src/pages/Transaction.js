import React from "react";
import { StyleSheet, View, Text} from "react-native";


export default function Transaction() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Nova transação
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

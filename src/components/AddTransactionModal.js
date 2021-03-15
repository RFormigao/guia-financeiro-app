import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function AddTransactionModal({ visible, handleVisible }) {
  return (
    visible && (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backdrop} onPress={ handleVisible }/>
        <View style={styles.modalContainer}>
          <Text>Qual o tipo da transação?</Text>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#7D40E7",
    opacity: 0.6,
    zIndex: 1,
  },
  modalContainer: {
    width: "80%",
    height: '200px',
    borderRadius: 10,
    backgroundColor: "#fff",
    zIndex: 2,
  },
});

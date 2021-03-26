import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  View,
  Image,
} from "react-native";

import inputMoney from "../../assets/input-money.png";
import outputMoney from "../../assets/output-money.png";

export default function AddTransactionModal({ visible, handleVisible, addTransaction }) {
  const [isPress, setIsPress] = useState({ input: false, output: false });

  const handlePressTransacation = (type) => {
    setIsPress({ ...isPress, [type]: !isPress[type] });
  };

  return (
    visible && (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backdrop} onPress={handleVisible} />
        <View style={styles.modalContainer}>
          <Text style={styles.titleTransaction}>Qual o tipo da transação?</Text>
          <View style={styles.controllerActions}>
            <TouchableHighlight
              style={
                isPress.input
                  ? styles.typeTransacationButtonPress
                  : styles.typeTransacationButton
              }
              onHideUnderlay={() => handlePressTransacation('input')}
              onShowUnderlay={() => handlePressTransacation('input')}
              underlayColor="transparent"
              onPress={addTransaction}
            >
              <Image style={styles.typeTransacationImage} source={inputMoney} />
            </TouchableHighlight>
            <TouchableHighlight
              style={
                isPress.output
                  ? styles.typeTransacationButtonPress
                  : styles.typeTransacationButton
              }
              onHideUnderlay={() => handlePressTransacation('output')}
              onShowUnderlay={() => handlePressTransacation('output')}
              underlayColor="transparent"
              onPress={addTransaction}
            >
              <Image
                style={styles.typeTransacationImage}
                source={outputMoney}
              />
            </TouchableHighlight>
          </View>
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
    height: 200,
    borderRadius: 10,
    backgroundColor: "#fff",
    zIndex: 2,
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
  titleTransaction: {
    color: "#7D40E7",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
  controllerActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  typeTransacationButton: {
    width: 100,
    height: 80,
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  typeTransacationButtonPress: {
    width: 100,
    height: 80,
    borderColor: "#7D40E7",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  typeTransacationImage: {
    width: 50,
    height: 50,
    marginLeft: 5,
  },
});

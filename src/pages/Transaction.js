import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { set } from "react-native-reanimated";

export default function Transaction() {
  const [transaction, setTransaction] = useState({
    name: "",
    date: new Date(),
  });

  const [showDate, setShowDate] = useState(false);

  const handleShowDate = () => {
    setShowDate(!showDate);
  };

  const onChangeDate = (event, date) => {
    setTransaction({ ...transaction, date })
    handleShowDate();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova transação</Text>
      <TextInput
        style={styles.inputTransactionName}
        value={transaction.name}
        multiline
        blurOnSubmit
        clearTextOnFocus
        textAlignVertical="top"
        placeholder="Qual o nome da transação?"
        placeholderTextColor="#D8C6F8"
        onChangeText={(text) => setTransaction({ ...transaction, name: text })}
      />
      <Text style={styles.viewTransactionDate} onPress={handleShowDate}>
        {transaction.date.toLocaleDateString("pt-BR")}
      </Text>
      {showDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={transaction.date}
          mode="date"
          display="calendar"
          onChange={onChangeDate}
          locale="pt-BR"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7d40e7",
    padding: 40,
  },
  title: {
    fontSize: 48,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 50,
  },
  inputTransactionName: {
    fontSize: 24,
    color: "#D8C6F8",
    marginBottom: 10,
  },
  viewTransactionDate: {
    fontSize: 18,
    color: "#D8C6F8",
  },
});

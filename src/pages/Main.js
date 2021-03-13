import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";

import ListTransactions from "../components/ListTransactions";

import profile from "../../assets/profile.png";

export default function Main({ navigation: { state } }) {
  const [user, setUser] = useState({});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const { userStorage } = state.params;
    setUser(userStorage);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={profile} />
      <Text style={styles.title}>{user.name}</Text>
      <View style={styles.containerAmount}>
        <Text style={styles.label}>Saldo total</Text>
        <View style={styles.controller}>
          <Text style={styles.amount}>R$ 4.500,00</Text>
          <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ListTransactions transactions={transactions} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7d40e7",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 30,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 40,
  },
  containerAmount: {
    width: "80%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  label: {
    color: "#F4C7EC",
  },
  amount: {
    fontSize: 36,
    fontWeight: "700",
    color: "#fff",
  },
  buttonContainer: {
    borderRadius: 30,
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 48,
    color: "#F4C7EC",
    transform: [{ translateY: -3 }],
  },
  controller: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listContainer: {
    backgroundColor: "#fff",
    width: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: 500,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleList: {
    color: "#7D40E7",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 30,
  },
  type: {
    flexDirection: "column",
  },
  titleItem: {
    color: "#262626",
    fontWeight: "700",
    fontSize: 14,
  },
  dateItem: {
    fontSize: 12,
    color: "#262626",
    fontWeight: "200",
  },
  incomeItem: {
    color: "#4FA840",
    fontSize: 12,
    fontWeight: "700",
  },
  expenditureItem: {
    color: "#DE5753",
    fontSize: 12,
    fontWeight: "700",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: "#D8C6F8",
    alignItems: "center",
    justifyContent: "center",
  },
  iconItem: {
    width: 30,
    height: 30,
  },
  containerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

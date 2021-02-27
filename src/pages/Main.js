import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";

import profile from "../../assets/profile.png";
import mortgage from "../../assets/svg/mortgage.svg";
import income from "../../assets/svg/income.svg";
import fastfood from "../../assets/svg/fastfood.svg";

export default function Main({ navigation: { state } }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const { userStorage } = state.params;
    setUser(userStorage);
  }, []);

  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      icon: mortgage,
      title: "Aluguel",
      date: "20/02/2020",
      amount: "- R$ 1050,00",
      type: "expenditure",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      icon: income,
      title: "Salário Scaffold",
      date: "20/02/2020",
      amount: "+ R$ 4000,00",
      type: "income",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      icon: fastfood,
      title: "Comida",
      date: "20/02/2020",
      amount: "- R$ 130,00",
      type: "expenditure",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      icon: fastfood,
      title: "Comida",
      date: "20/02/2020",
      amount: "- R$ 80,00",
      type: "expenditure",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d74",
      icon: fastfood,
      title: "Comida",
      date: "20/02/2020",
      amount: "- R$ 35,00",
      type: "expenditure",
    },
  ];

  const Item = ({ icon, title, date, amount, type }) => (
    <View style={styles.item}>
      <View style={styles.containerItem}>
        <View style={styles.iconContainer}>
          <Image style={styles.iconItem} source={icon} />
        </View>
        <View>
          <Text style={styles.titleItem}>{title}</Text>
          <Text style={styles.dateItem}>{date}</Text>
        </View>
      </View>
      <Text
        style={type === "income" ? styles.incomeItem : styles.expenditureItem}
      >
        {amount}
      </Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item
      icon={item.icon}
      title={item.title}
      date={item.date}
      amount={item.amount}
      type={item.type}
    />
  );

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={profile} />
      <Text style={styles.title}>{user.name}</Text>
      <View style={styles.containerAmount}>
        <Text style={styles.label}>Saldo total</Text>
        <View style={styles.controller}>
          <Text style={styles.amount}>R$ 4.500,00</Text>
          <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8}>
            <Text
              style={[
                styles.buttonText,
                {
                  transform: [{ translateY: -3 }],
                },
              ]}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView style={styles.listContainer}>
        <Text style={styles.titleList}>Ultimas transações</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
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

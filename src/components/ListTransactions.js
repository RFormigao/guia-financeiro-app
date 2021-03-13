import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";

export default function ListTransactions({ transactions }) {
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

  return (
    <SafeAreaView style={styles.listContainer}>
      <Text style={styles.titleList}>Ultimas transações</Text>
      {transactions.lenght ? (
        <FlatList
          data={transactions}
          renderItem={({ item }) => (
            <Item
              icon={item.icon}
              title={item.title}
              date={item.date}
              amount={item.amount}
              type={item.type}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View>
          <Text style={styles.notTransactionText}>Nenhuma transação adicionada ainda</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  notTransactionText: {
    textAlign: "center",
    fontSize: 16,
  }
});

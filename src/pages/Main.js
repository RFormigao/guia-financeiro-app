import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity, SafeAreaView, FlatList, } from "react-native";

import profile from '../../assets/profile.png';

export default function Main() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.titleItem}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={profile} />
      <Text style={styles.title}>Robson Formigão</Text>
      <View style={styles.containerAmount}>
        <Text style={styles.label}>Saldo total</Text>
        <View style={styles.controller}>
          <Text style={styles.amount}>R$ 4.500,00</Text>
          <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8}>
            <Text style={[styles.buttonText, {
              transform: [{ translateY: -3 }]
            }]}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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
    paddingTop: 50
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
  },
  listContainer: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: 500,
  },
  titleItem: {
    color: '#000'
  }
});

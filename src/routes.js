import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CreateAccount from "./pages/CreateAccount";
import Main from "./pages/Main";

async function getData() {
  try {
    let jsonValue = await AsyncStorage.getItem("@user");
    jsonValue = jsonValue != null ? JSON.parse(jsonValue) : null;

    return jsonValue.name;
  } catch (error) {
    alert("Ocorreu um erro ao buscar os items");
  }
}

const Routes = createAppContainer(
  createStackNavigator(
    {
      CreateAccount: {
        screen: CreateAccount,
        navigationOptions: {
          header: null,
        },
      },
      Main: {
        screen: Main,
        navigationOptions: {
          header: null,
        },
      },
    },
    {
      initialRouteName: getData() ? "Main" : "CreateAccount",
    }
  )
);

export default Routes;

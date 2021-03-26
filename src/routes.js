import Auth from "./pages/Auth";
import CreateAccount from "./pages/CreateAccount";
import Main from "./pages/Main";
import Transaction from "./pages/Transaction";

export const routes = {
  Auth: {
    screen: Auth,
    navigationOptions: {
      header: null,
    },
  },
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
  Transaction: {
    screen: Transaction,
    navigationOptions: {
      header: null,
    },
  },
};

export const config = {
  initialRouteName: "Transaction",
};

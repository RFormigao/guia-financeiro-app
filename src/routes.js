import Auth from "./pages/Auth";
import CreateAccount from "./pages/CreateAccount";
import Main from "./pages/Main";

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
};

export const config = {
  initialRouteName: "Auth",
};

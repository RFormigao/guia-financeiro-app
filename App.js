import React from 'react';
import { StatusBar } from 'react-native'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { routes, config } from './src/routes'

export default function App() {
  const StackNaviator = createStackNavigator(routes, config);
  const AppContainer = createAppContainer(StackNaviator);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <AppContainer />
    </>
  );
}

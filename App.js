import React, { useEffect } from "react";
import { Provider } from "react-redux";
import * as Notifications from "expo-notifications";
import store from "./redux/store";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { DecksTabs } from "./navigation/TabNavigator";
import { DecksStacks } from "./navigation/StackNavigator";
import { LocalNotification } from "./utils/notifications";

export default function App() {
  useEffect(() => {
    LocalNotification();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DecksTabs />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

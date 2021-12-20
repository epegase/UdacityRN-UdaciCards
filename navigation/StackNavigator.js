import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeckList from "../screens/DeckList";
import Deck from "../screens/Deck";
import AddCard from "../screens/AddCard";
import Quiz from "../screens/Quiz";
import { DecksTabs } from "./TabNavigator";

const Stack = createNativeStackNavigator();

export function DecksStacks() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={DecksTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Deck" component={Deck} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
}

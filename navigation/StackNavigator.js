import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeckList from "../screens/DeckList";
import Deck from "../screens/Deck";
import AddCard from "../screens/AddCard";
import Quiz from "../screens/Quiz";

const Stack = createNativeStackNavigator();

export function DecksStacks() {
  return (
    <Stack.Navigator initialRouteName="DeckList">
      <Stack.Screen name="DeckList" component={DeckList} />
      <Stack.Screen name="Deck" component={Deck} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
}

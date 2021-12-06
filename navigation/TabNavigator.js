import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddDeck from "../screens/AddDeck";
import DeckList from "../screens/DeckList";
import { DecksStacks } from "./StackNavigator";

const Tab = createBottomTabNavigator();

export function DecksTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Udacicards" component={DecksStacks} />
      <Tab.Screen name="AddDeck" component={AddDeck} />
    </Tab.Navigator>
  );
}

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddDeck from "../screens/AddDeck";
import DeckList from "../screens/DeckList";
import Icon from "react-native-vector-icons/AntDesign";
import { DecksStacks } from "./StackNavigator";

const Tab = createBottomTabNavigator();

export function DecksTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="UdaciCards"
        component={DecksStacks}
        options={{
          tabBarIcon: () => <Icon name="home" size={30} />,
        }}
      />
      <Tab.Screen
        name="AddDeck"
        component={AddDeck}
        options={{
          tabBarIcon: () => <Icon name="addfolder" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
}

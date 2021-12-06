import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

/* 
Passing parameters to routes : https://reactnavigation.org/docs/params
*/

const CardDeck = ({ title, questions, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>{title}</Text>
        <Text>{questions.length}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardDeck;

const styles = StyleSheet.create({});

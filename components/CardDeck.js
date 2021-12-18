import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
/* 
Passing parameters to routes : https://reactnavigation.org/docs/params
*/

const CardDeck = ({ title, questions, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Card>
          <Card.Content>
            <Title>{title}</Title>
            <Paragraph>{questions.length} cards</Paragraph>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default CardDeck;

const styles = StyleSheet.create({
  CardStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

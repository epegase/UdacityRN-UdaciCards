import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CardDeck from "../components/CardDeck";
import { fetchOneDeck, selectOneDeck } from "../redux/decksSlice";

const Deck = ({ navigation, route }) => {
  const { id } = route.params;
  const deck = useSelector((state) => selectOneDeck(state, id));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneDeck(id));
  }, [dispatch]);

  return (
    <>
      {deck !== null && (
        <View>
          <View>
            <Text>{deck.title}</Text>
            <Text>{deck.questions.length} </Text>
          </View>
          <Button
            onPress={() =>
              navigation.navigate("AddCard", {
                screen: "AddCard",
                params: { id: route.params.id },
              })
            }
            title="Add Card"
            color="#000"
            style={styles.buttonStyle}
          />
          <Button
            onPress={() => navigation.navigate("Quiz", { id: route.params.id })}
            title="Start Quiz"
            color="#000"
          />
        </View>
      )}
    </>
  );
};

export default Deck;

const styles = StyleSheet.create({
  buttonStyle: {
    marginBottom: 30,
  },
  container: {
    marginBottom: 50,
  },
});

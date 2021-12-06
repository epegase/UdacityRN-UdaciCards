import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CardDeck from "../components/CardDeck";
import { fetchDecks, selectDecks } from "../redux/decksSlice";
import { getDecks, loadData } from "../utils/helpers";

const DeckList = ({ navigation }) => {
  const decks = useSelector(selectDecks);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDecks());
  }, [dispatch]);

  return (
    <View>
      {Object.keys(decks).length === 0 ? (
        <>
          <Text>No Deck available</Text>
        </>
      ) : (
        <ScrollView>
          {Object.keys(decks).map((id) => (
            <CardDeck
              key={id}
              title={decks[id].title}
              questions={decks[id].questions}
              onPress={() => navigation.navigate("Deck", { id: id })}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default DeckList;

const styles = StyleSheet.create({});

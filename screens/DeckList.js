import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CardDeck from "../components/CardDeck";
import { fetchDecks, selectDecks } from "../redux/decksSlice";

/* 
- displays the title of each Deck
- displays the number of cards in each deck
*/

const DeckList = ({ navigation }) => {
  const decks = useSelector(selectDecks);
  console.log(decks);

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
              onPress={() => navigation.navigate("Deck", { title: id })}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default DeckList;

const styles = StyleSheet.create({});

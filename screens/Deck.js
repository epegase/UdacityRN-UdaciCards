import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Divider } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import CardDeck from "../components/CardDeck";
import {
  fetchOneDeck,
  postDeleteDeck,
  selectOneDeck,
} from "../redux/decksSlice";

/* 
- display the title of the Deck
- display the number of cards in the deck
- display a button to start a quiz on this specific deck
- display a button to add a new question to the deck
*/

const Deck = ({ navigation, route }) => {
  const { title } = route.params;

  const deck = useSelector((state) => selectOneDeck(state, title));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneDeck(title));
  }, [dispatch]);

  const handleDelete = () => {
    dispatch(postDeleteDeck({ id: title }));
    navigation.navigate("DeckList");
  };

  return (
    <>
      {deck !== null && (
        <View>
          <View style={styles.CardStyle}>
            <CardDeck
              key={deck.title}
              title={deck.title}
              questions={deck.questions}
              onPress={() => navigation.navigate("Deck", { title: deck.title })}
            />
          </View>
          <Button
            icon="plus"
            mode="contained"
            onPress={() =>
              navigation.navigate("AddCard", { title: deck.title })
            }
            style={styles.ButtonStyle}
          >
            Add New Card
          </Button>
          <Divider />
          <Button
            icon="cards-outline"
            mode="contained"
            onPress={() => navigation.navigate("Quiz", { title: deck.title })}
            style={styles.ButtonStyle}
          >
            Start Quiz
          </Button>
          <Button mode="text" onPress={() => handleDelete()}>
            Delete Deck
          </Button>
        </View>
      )}
    </>
  );
};

export default Deck;

const styles = StyleSheet.create({
  ButtonStyle: {
    marginBottom: 30,
  },
  CardStyle: {
    marginTop: 20,
    marginBottom: 40,
  },
});

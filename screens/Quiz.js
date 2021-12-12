import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectOneDeck } from "../redux/decksSlice";

/* 
- display a card question
- display an option to view the answer (flips the card)
- a “Correct” button
- an “Incorrect” button
- the number of cards left in the quiz
- display the percentage correct once the quiz is complete
*/

const Quiz = ({ question, answer, route, navigation }) => {
  const [flip, setFlip] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const { title } = route.params;
  const deck = useSelector((state) => selectOneDeck(state, title));

  const onPressCorrect = () => {
    setCorrect(() => correct + 1);
    setCount(() => count + 1);
    setFlip(false);
  };
  const onPressIncorrect = () => {
    setIncorrect(() => incorrect + 1);
    setCount(() => count + 1);
    setFlip(false);
  };

  return (
    <View>
      <Text>{deck.questions[count].question}</Text>
      <Text>{deck.questions[count].answer}</Text>
      <Button onPress={onPressCorrect} title="Correct" color="#008000" />
      <Button onPress={onPressIncorrect} title="Incorrect" color="#ff0000" />
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({});

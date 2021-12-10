import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

/* 
- display a card question
- display an option to view the answer (flips the card)
- a “Correct” button
- an “Incorrect” button
- the number of cards left in the quiz
- display the percentage correct once the quiz is complete
*/

const Quiz = ({ id, question, answer, route, navigation }) => {
  const [flip, setFlip] = useState(false);
  const [correct, setCorrect] = useState(0);
  cont[(incorrect, setIncorrect)] = useState(0);
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const { title } = route.params;
  const deck = useSelector((state) => selectOneDeck(state, title));

  const handleCorrect = () => {
    setCorrect(() => correct + 1);
    setCount(() => count + 1);
    setFlip(false);
  };
  const handleIncorrect = () => {
    setIncorrect(() => incorrect + 1);
    setCount(() => count + 1);
    setFlip(false);
  };

  return (
    <View>
      <Text>{question}</Text>
      <Text>{answer}</Text>
      <Button onPress={onPressCorrect} title="Correct" color="#008000" />
      <Button onPress={onPressIncorrect} title="Incorrect" color="#ff0000" />
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({});

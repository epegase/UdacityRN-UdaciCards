import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Title, Button } from "react-native-paper";
import FlipCard from "react-native-flip-card";
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

const Quiz = ({ route, navigation }) => {
  const [flip, setFlip] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [count, setCount] = useState(0);

  // const dispatch = useDispatch();
  const { title } = route.params;

  const deck = useSelector((state) => selectOneDeck(state, title));

  const numberOfQuestions = deck.questions.length;

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

  const onPressRestart = () => {
    setCount(0);
    setCorrect(0);
    setIncorrect(0);
  };

  if (numberOfQuestions === 0) {
    return (
      <View>
        <Title>The Deck is Empty. Return to Add Card in Deck</Title>
      </View>
    );
  }

  if (correct + incorrect === numberOfQuestions) {
    return (
      <View>
        <Title>Quiz Done</Title>
        <Title>
          You got {((correct / numberOfQuestions) * 100).toFixed(0)}%
        </Title>
        <Button
          icon="restart"
          mode="contained"
          onPress={onPressRestart}
          style={styles.ButtonStyle}
        >
          Restart Quiz
        </Button>
      </View>
    );
  }

  return (
    <View>
      <View>
        <Text>{`${count + 1}/${numberOfQuestions}`}</Text>
      </View>
      <View style={styles.FlipCard}>
        <FlipCard
          style={styles.card}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={flip}
          clickable={false}
        >
          {/* Face Side */}
          <View style={styles.Face}>
            <Card>
              <Card.Content>
                <Title>{deck.questions[count].question}</Title>
              </Card.Content>
            </Card>
            <Text style={styles.clickableText} onPress={() => setFlip(!flip)}>
              Answer
            </Text>
          </View>
          {/* Back Side */}
          <View style={styles.Back}>
            <Card>
              <Card.Content>
                <Title>{deck.questions[count].answer}</Title>
              </Card.Content>
            </Card>
            <Text style={styles.clickableText} onPress={() => setFlip(!flip)}>
              Question
            </Text>
          </View>
        </FlipCard>
        <Button onPress={() => setFlip(!flip)} title="See Answer" />
      </View>
      <View>
        <Button
          icon="thumb-up"
          mode="contained"
          onPress={onPressCorrect}
          color="#008000"
          style={styles.ButtonStyle}
        >
          CORRECT
        </Button>
        <Button
          icon="thumb-down"
          mode="contained"
          onPress={onPressIncorrect}
          color="#ff0000"
          style={styles.ButtonStyle}
        >
          INCORRECT
        </Button>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  ButtonStyle: {
    marginTop: 20,
    width: 300,
    marginLeft: 30,
  },
  Face: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Back: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  FlipCard: {
    height: 300,
    justifyContent: "space-between",
  },
  clickableText: {
    color: "red",
  },
});

import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { postCardtoDeck } from "../redux/decksSlice";

const AddCard = ({ route, navigation }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const title = route.params.id;
  const dispatch = useDispatch();

  const onPressSubmit = () => {
    if (question && answer) {
      dispatch(postCardtoDeck(title, { question, answer }));
    }
    setQuestion("");
    setAnswer("");
    navigation.navigate("Deck");
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(question) => setQuestion(question)}
        value={question}
      />
      <TextInput
        style={styles.input}
        onChangeText={(answer) => setAnswer(answer)}
        value={answer}
      />
      <Button onPress={onPressSubmit} title="Submit" color="#000" />
    </View>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

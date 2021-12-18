import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { postCardtoDeck } from "../redux/decksSlice";

/* 
- input to enter in the question
- input to enter in the answer
- a button to submit the new question
*/

const AddCard = ({ route, navigation }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const title = route.params.title;

  const dispatch = useDispatch();

  const onPressSubmit = () => {
    if (question !== "" && answer !== "") {
      const card = { question, answer };
      dispatch(postCardtoDeck({ title, card }));
    }
    setQuestion("");
    setAnswer("");
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        mode="outlined"
        label="Question"
        placeholder="Type something"
        value={question}
        onChangeText={(question) => setQuestion(question)}
      />
      <TextInput
        mode="outlined"
        label="Answer"
        placeholder="Type something"
        value={answer}
        onChangeText={(answer) => setAnswer(answer)}
      />
      <Button
        icon="send"
        mode="contained"
        onPress={onPressSubmit}
        style={styles.ButtonStyle}
      >
        Submit
      </Button>
    </View>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  ButtonStyle: {
    marginTop: 30,
  },
});

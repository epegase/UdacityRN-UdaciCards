import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Quiz = ({ id, question, answer }) => {
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

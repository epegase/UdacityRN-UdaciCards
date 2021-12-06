import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { postDeckTitle } from "../redux/decksSlice";

const AddDeck = ({ navigation }) => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const onPressAddTitle = () => {
    if (title !== "") {
      dispatch(postDeckTitle(title));
    }
    setTitle("");
    navigation.goBack();
  };

  const handleChange = (text) => {
    setTitle(text);
  };

  return (
    <View>
      <Text>Title of Deck</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={title}
      />
      <Button onPress={onPressAddTitle} title="Submit" color="#000" />
    </View>
  );
};

export default AddDeck;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

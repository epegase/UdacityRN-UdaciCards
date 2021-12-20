import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import { useDispatch } from "react-redux";
import { postDeckTitle } from "../redux/decksSlice";

/* 
- input to enter the title of new deck
- button to submit new deck title
*/

const AddDeck = ({ navigation }) => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const onPressAddTitle = () => {
    if (title !== "") {
      dispatch(postDeckTitle(title));
    }
    navigation.navigate("Home", {
      screen: "Deck",
      params: { title: title },
    });
    setTitle("");
  };

  const handleChange = (title) => {
    setTitle(title);
  };

  return (
    <View>
      <Title> Enter the Title of new Deck</Title>
      <TextInput
        mode="outlined"
        label="Deck Title"
        placeholder="Type Title"
        value={title}
        onChangeText={handleChange}
      />
      <Button
        icon="send"
        mode="contained"
        onPress={onPressAddTitle}
        style={styles.ButtonStyle}
      >
        Submit
      </Button>
    </View>
  );
};

export default AddDeck;

const styles = StyleSheet.create({
  ButtonStyle: {
    marginTop: 60,
  },
});

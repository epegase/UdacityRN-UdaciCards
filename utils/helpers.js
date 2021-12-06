import AsyncStorage from "@react-native-async-storage/async-storage";
import DATA from "./DATA";

export const loadData = async (DATA) => {
  try {
    const jsonValue = JSON.stringify(DATA);
    await AsyncStorage.setItem("data", jsonValue);
  } catch (e) {
    // read error
    console.log(e);
  }

  console.log("Done.");
};

export const getDecks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("data");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const getDeck = async (id) => {
  try {
    const jsonValue = await AsyncStorage.getItem("data");
    const deck = JSON.parse(jsonValue);
    return jsonValue != null ? deck[id] : null;
  } catch (e) {
    // read error
    console.log(e);
  }

  console.log("Done.");
};

export const saveDeckTitle = async (title) => {
  let data = {
    [title]: {
      title,
      questions: [],
    },
  };
  const jsonValue = JSON.stringify(data);
  try {
    await AsyncStorage.mergeItem("data", jsonValue);
    return;
  } catch (e) {
    // save error
    console.log(e);
  }

  console.log("Done.");
};

export const addCardToDeck = async (title, card) => {
  let data = {
    [title]: {
      title,
      questions: [...decks[title].questions, card],
    },
  };
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.mergeItem("data", jsonValue);
  } catch (e) {
    // save error
    console.log(e);
  }

  console.log("Done.");
};

export const deleteDeck = async (id) => {
  try {
    await AsyncStorage.removeItem(id);
  } catch (e) {
    // remove error
  }

  console.log("Done.");
};

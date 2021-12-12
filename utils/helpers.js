import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "data";

export const getDecks = async () => {
  try {
    const decks = await AsyncStorage.getItem(key);
    return decks != null ? JSON.parse(decks) : null;
  } catch (e) {
    // error reading value
    console.log("failed to fetch decks");
  }
};

export const getDeck = async (id) => {
  try {
    const decks = await AsyncStorage.getItem(key);
    const data = JSON.parse(decks);
    return decks != null ? data[id] : null;
  } catch (e) {
    // read error
    console.log(e);
  }

  console.log("Done.");
};

export const saveDeckTitle = async (title) => {
  try {
    const data = {
      [title]: {
        title,
        questions: [],
      },
    };
    const jsonDeck = JSON.stringify(data);
    await AsyncStorage.mergeItem(key, jsonDeck);
  } catch (e) {
    // save error
    console.log(e);
  }

  console.log("Done.");
};

export const addCardToDeck = async (title, card) => {
  try {
    const deck = await getDeck(title);
    const data = {
      [title]: {
        title: title,
        questions: [...deck.questions].concat(card),
      },
    };
    const jsonDeck = JSON.stringify(data);
    await AsyncStorage.mergeItem(key, jsonDeck);
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

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
    await AsyncStorage.mergeItem(
      key,
      JSON.stringify({
        [title]: {
          title: title,
          questions: [],
        },
      })
    );
  } catch (e) {
    // save error
    console.log(e);
  }

  console.log("Done.");
};

export const addCardToDeck = async (title, card) => {
  try {
    const jsonDecks = await AsyncStorage.getItem(key);
    const decks = JSON.parse(jsonDecks);

    const data = {
      [title]: {
        title: title,
        questions: [...decks[title].questions].concat(card),
      },
    };
    await AsyncStorage.mergeItem(key, JSON.stringify(data));
  } catch (e) {
    // save error
    console.log(e);
  }

  console.log("Done.");
};

export const deleteDeck = async (id) => {
  try {
    const jsonDecks = await AsyncStorage.getItem(key);
    const decks = JSON.parse(jsonDecks);
    const { [id]: value, ...remainingDecks } = decks;
    await AsyncStorage.setItem(key, JSON.stringify(remainingDecks));
  } catch (e) {
    // remove error
  }

  console.log("Done.");
};

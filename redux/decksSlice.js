import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addCardToDeck,
  getDeck,
  getDecks,
  saveDeckTitle,
  deleteDeck,
} from "../utils/helpers";

export const fetchDecks = createAsyncThunk("decks/fetchDecks", async () => {
  const response = await getDecks();
  return response;
});

export const fetchOneDeck = createAsyncThunk(
  "decks/fetchOneDeck",
  async (id) => {
    const response = await getDeck(id);
    return response;
  }
);

export const postDeckTitle = createAsyncThunk(
  "decks/postDeckTitle",
  async (title) => {
    await saveDeckTitle(title);
    return title;
  }
);

export const postCardtoDeck = createAsyncThunk(
  "decks/postCardtoDeck",
  async ({ title, card }) => {
    await addCardToDeck(title, card);
    return {
      title,
      card,
    };
  }
);

export const postDeleteDeck = createAsyncThunk(
  "decks/postDeleteDeck",
  async (id) => {
    await deleteDeck(id);
    return id;
  }
);

export const decksSlice = createSlice({
  name: "decks",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDecks.fulfilled, (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    });

    builder.addCase(fetchOneDeck.fulfilled, (state, { payload }) => {
      return state[payload];
    });

    builder.addCase(postDeckTitle.fulfilled, (state, { payload }) => {
      return {
        ...state,
        [payload]: {
          title: payload,
          questions: [],
        },
      };
    });

    builder.addCase(postCardtoDeck.fulfilled, (state, { payload }) => {
      const { title, card } = payload;
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: [...state[title].questions].concat(card),
        },
      };
    });

    builder.addCase(postDeleteDeck.fulfilled, (state, { payload }) => {
      const { [payload]: value, ...remainingDecks } = state;
      return remainingDecks;
    });
  },
});

export const selectDecks = (state) => state.decks;
export const selectOneDeck = (state, id) => state.decks[id];

export default decksSlice.reducer;

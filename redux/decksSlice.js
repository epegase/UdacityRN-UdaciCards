import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addCardToDeck,
  getDeck,
  getDecks,
  saveDeckTitle,
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
    const response = await saveDeckTitle(title);
    return response;
  }
);

export const postCardtoDeck = createAsyncThunk(
  "decks/postCardtoDeck",
  async (title, card) => {
    const response = await addCardToDeck(title, card);
    return response;
  }
);

export const decksSlice = createSlice({
  name: "decks",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDecks.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
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
    builder.addCase(postCardtoDeck.fulfilled, (state, { title, card }) => {
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: [...state[title].questions].concat(card),
        },
      };
    });
  },
});

export const selectDecks = (state) => state.decks;
export const selectOneDeck = (state, id) => state.decks[id];

export default decksSlice.reducer;

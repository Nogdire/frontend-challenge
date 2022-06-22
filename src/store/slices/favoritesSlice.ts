import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFavoriteState, ICatObject } from "./types";

const initialState: IFavoriteState = {
  favoriteCats: [],
};

export const favoriteSlice = createSlice({
  name: "favoriteCats",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<ICatObject>) => {
      const isAllreadyAdded = state.favoriteCats.find(
        (item) => item.id === action.payload.id
      );
      if (!isAllreadyAdded) {
        state.favoriteCats.push(action.payload);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<ICatObject>) => {
      state.favoriteCats = state.favoriteCats.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});

export default favoriteSlice.reducer;

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

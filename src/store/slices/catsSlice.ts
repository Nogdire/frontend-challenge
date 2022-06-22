import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ICatObject, IAllCatsState } from "./types";
import { RootState } from "..";

//THUNK

export const catsRequest = createAsyncThunk<
  ICatObject[],
  undefined,
  { rejectValue: string; state: RootState }
>("cats/catsRequest", async (_, thunkApi) => {
  try {
    const page = thunkApi.getState().catsReducer.page;

    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=30&page=${page}&order=asc&mime_types=png,jpg`,
      {
        headers: {
          "x-api-key": "4411178a-5228-4c50-9b6c-b75d626a3930",
        },
      }
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const result = await response.json();

    return result;
  } catch (e) {
    if (e instanceof Error) {
      thunkApi.rejectWithValue(e.message);
    } else {
      thunkApi.rejectWithValue("Unknown error");
    }
  }
});

//SLICE

const initialState: IAllCatsState = {
  data: [],
  page: 0,
  loading: true,
  error: null,
};

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(catsRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(catsRequest.fulfilled, (state, action) => {
        state.data = [...state.data, ...action.payload];
        state.loading = false;
        state.error = null;
        state.page++;
      })
      .addCase(catsRequest.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export default catsSlice.reducer;

export const { setLoading } = catsSlice.actions;

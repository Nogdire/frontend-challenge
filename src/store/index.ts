import { configureStore, combineReducers } from "@reduxjs/toolkit";
import catsReducer from "./slices/catsSlice";
import favoriteReducer from "./slices/favoritesSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistCongif = {
  key: "root",
  storage,
  blacklist: ["catsReducer"],
};

const rootReducer = combineReducers({
  catsReducer,
  favoriteReducer,
});

const persistedReducer = persistReducer(persistCongif, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

import appReducer from "./features/appSlice.js";
import { appApi } from "../services/appApi.js";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  version: 1,
  storage: sessionStorage,
};

const reducer = combineReducers({
  app: appReducer,
  [appApi.reducerPath]: appApi.reducer,
});

const persistorReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistorReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat([appApi.middleware]),
});

import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { CountryApi } from "./services/CountryApi";
export const store = configureStore({
  reducer: {
    [CountryApi.reducerPath]: CountryApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CountryApi.middleware),
});
setupListeners(store.dispatch)
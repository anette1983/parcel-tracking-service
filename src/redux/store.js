import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
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
import { warehousesReducer } from "./warehouses/warehousesSlice";
import { parcelsReducer } from "./parcels/parcelsSlice";

const warehousesPersistConfig = {
  key: "warehouses",
  storage,
};

const parcelsPersistConfig = {
  key: "parcels",
  storage,
};

const persistedReducer = persistReducer(
  warehousesPersistConfig,
  warehousesReducer
);
const persistedParcelsReducer = persistReducer(
  parcelsPersistConfig,
  parcelsReducer
);

export const store = configureStore({
  reducer: {
    warehouses: persistedReducer,
    parcels: persistedParcelsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

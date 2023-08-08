import { createSlice } from "@reduxjs/toolkit";
import { fetchParcel } from "./operations";

const initialState = {
  parcel: {},
  parcelsList: [],
  parcelQuery: "",
  isLoading: false,
  error: null,
};

export const parcelsSlice = createSlice({
  name: "parcels",
  initialState,
  reducers: {
    setParcelQuery: (state, action) => {
      state.parcelQuery = action.payload;
    },
    setParcelsList: (state, action) => {
      const item = state.parcelsList.find((item) => item === action.payload);
      if (item) {
        return;
      }
      state.parcelsList = [...state.parcelsList, action.payload];
    },
    deleteParcelFromList: (state, action) => {
      state.parcelsList = state.parcelsList.filter(
        (parcel) => parcel !== action.payload
      );
    },
    deleteParcel: (state) => {
      state.parcel = {};
    },

    clearParcelsList: (state) => {
      state.parcelsList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchParcel.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchParcel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.parcel = action.payload;
      })
      .addCase(fetchParcel.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setParcelQuery,
  setParcelsList,
  clearParcelsList,
  deleteParcel,
  deleteParcelFromList,
} = parcelsSlice.actions;

export const parcelsReducer = parcelsSlice.reducer;

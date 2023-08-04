import { createSlice } from "@reduxjs/toolkit";
import { fetchParcel, fetchParcelsList } from "./operations";

const initialState = {
  parcel: {},
  parcelsList: [],
  fetchedParselsList: [],
  parcelQuery: "",
  currentPage: 1,
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
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setParcelsList: (state, action) => {
      const item = state.parcelsList.find((item) => item === action.payload);
      if (item) {
        return;
      }
      state.parcelsList = [...state.parcelsList, action.payload];
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
      })
      .addCase(fetchParcelsList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchParcelsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.fetchedParselsList = action.payload;
      })
      .addCase(fetchParcelsList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setParcelQuery,
  setCurrentPage,
  setParcelsList,
  clearParcelsList,
} = parcelsSlice.actions;

export const parcelsReducer = parcelsSlice.reducer;

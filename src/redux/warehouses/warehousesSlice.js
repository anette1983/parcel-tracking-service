import { createSlice } from "@reduxjs/toolkit";
import { fetchWarehouses } from "./operations";

const initialState = {
  warehouses: [],
  cityQuery: "Київ",
  currentPage: 1,
  isLoading: false,
  error: null,
};

export const warehousesSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {
    setCityQuery: (state, action) => {
      state.cityQuery = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWarehouses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWarehouses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.warehouses = action.payload;
      })
      .addCase(fetchWarehouses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.warehouses = [];
      });
  },
});

export const { setCityQuery, setCurrentPage } = warehousesSlice.actions;
export const warehousesReducer = warehousesSlice.reducer;

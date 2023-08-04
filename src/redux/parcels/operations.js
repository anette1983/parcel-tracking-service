import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../services/api";

export const fetchParcel = createAsyncThunk(
  "parcels/fetchParcel",
  async (body, thunkApi) => {
    try {
      const res = await getData(body);

      if (res.data?.length === "0") {
        throw new Error(`Вибачте, відправлення відсутнє!`);
      }

      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchParcelsList = createAsyncThunk(
  "parcels/fetchParcelsList",
  async (body, thunkApi) => {
    try {
      const res = await getData(body);

      if (res.data?.length === "0") {
        throw new Error(`Вибачте, відправлення відсутні!`);
      }

      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

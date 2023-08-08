import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../services/api";

export const fetchParcel = createAsyncThunk(
  "parcels/fetchParcel",
  async (body, thunkApi) => {
    try {
      const { data } = await getData(body);

      if (data.data?.length === "0") {
        throw new Error(`Вибачте, відправлення відсутнє!`);
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

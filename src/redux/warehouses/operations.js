import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../services/api";

export const fetchWarehouses = createAsyncThunk(
  "warehouses/getWarehouses",
  async (body, thunkApi) => {
    try {
      const res = await getData(body);
      console.log(res);

      if (res.data?.length === "0") {
        throw new Error(`Вибачте, відділення відсутні!`);
      }

      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
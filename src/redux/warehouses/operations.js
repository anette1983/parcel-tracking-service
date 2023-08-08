import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../services/api";

export const fetchWarehouses = createAsyncThunk(
  "warehouses/fetchWarehouses",
  async (body, thunkApi) => {
    try {
      const { data } = await getData(body);

      if (data?.data?.length === 0 || data?.errorCodes.length > 0) {
        throw new Error(`Щось пішло не так. Спробуйте пізніше!`);
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

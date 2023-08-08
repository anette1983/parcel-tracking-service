import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../services/api";

export const fetchWarehouses = createAsyncThunk(
  "warehouses/fetchWarehouses",
  async (body, thunkApi) => {
    try {
      const { data } = await getData(body);

      if (data?.errorCodes.length > 0) {
        throw new Error(`Щось пішло не так. Спробуйте пізніше!`);
      }

      if (data?.data?.length === 0 || data?.info.totalCount === 0) {
        throw new Error(`Відділення відсутні!`);
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

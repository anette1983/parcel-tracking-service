import axios from "axios";

axios.defaults.baseURL = "https://api.novaposhta.ua/v2.0/json/";

export const getData = async (body) => {
  try {
    const response = await axios.post(``, body);
    if (response.status !== 200) {
      throw new Error(`Failed to fetch data`);
    }

    console.log(response.data);
    return response.data;
  } catch (error) {
    alert(error.message);
    return error;
  }
};

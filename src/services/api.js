import axios from "axios";

axios.defaults.baseURL = "https://api.novaposhta.ua/v2.0/json/";

export const getData = (body) => {
  return axios.post(``, body);
};

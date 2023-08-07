export const createBody = (cityName = "Київ", currentPage = 1) => {
  return {
    apiKey: "467661ce29e9281de136f9994193b7e7",
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityName: cityName,
      Limit: "50",
      Page: currentPage,
    },
  };
};

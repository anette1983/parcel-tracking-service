export const selectParcel = (state) => state.parcels.parcel;
export const selectParcelsList = (state) => state.parcels.parcelsList;
export const selectParcelQuery = (state) => state.parcels.parcelQuery;

export const selectIsLoading = (state) => state.parcels.isLoading;
export const selectError = (state) => state.parcels.error;
export const selectFetchedParcelsList = (state) =>
  state.parcels.fetchedParselsList;

export const selectSingleParcelData = (state) => {
  const { data } = selectParcel(state);
  if (!data) {
    return null;
  }
  const singleParcelData = data[0];
  return singleParcelData;
};

export const selectListParcelData = (state) => {
  const data = selectParcelsList(state);

  return data;
};

import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchForm from "../../components/SearchForm/SearchForm";
import ParcelCard from "../../components/ParcelCard/ParcelCard";
import Loader from "../../components/Loader/Loader";

import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectParcelQuery,
  selectParcelsList,
  selectSingleParcelData,
} from "../../redux/parcels/selectors";
import { fetchParcel } from "../../redux/parcels/operations";
import {
  deleteParcel,
  setParcelQuery,
  setParcelsList,
} from "../../redux/parcels/parcelsSlice";
import SearchHistoryList from "../../components/SearchHistoryList/SearchHistoryList";
import { Typography } from "@mui/material";

const Home = () => {
  const isHistoryShown = useSelector(selectParcelsList)?.length !== 0;
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const parcelQuery = useSelector(selectParcelQuery);

  const parcelInfo = useSelector(selectSingleParcelData);

  const handleParcelCardClose = () => {
    dispatch(deleteParcel());
    dispatch(setParcelQuery(""));
  };

  const handleSearchFormSubmit = (value) => {
    const body = {
      apiKey: "467661ce29e9281de136f9994193b7e7",
      modelName: "TrackingDocument",
      calledMethod: "getStatusDocuments",
      methodProperties: {
        Documents: [
          {
            DocumentNumber: value,
            Phone: "380633899529",
          },
        ],
      },
    };

    dispatch(fetchParcel(body));
    dispatch(setParcelsList(value));
    dispatch(setParcelQuery(value));
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Відправлення</title>
      </Helmet>
      <Typography variant="h4" component="h1" mt={2} mb={2}>
        Пошук відправлень
      </Typography>
      <SearchForm
        name={"parcel"}
        label={"Введіть номер ТТН"}
        handleSearchFormSubmit={handleSearchFormSubmit}
      />
      {isLoading && !error && <Loader />}
      {error && <p>{error}</p>}

      {parcelQuery !== "" && (
        <ParcelCard parcelInfo={parcelInfo} onClose={handleParcelCardClose} />
      )}
      {isHistoryShown && <SearchHistoryList />}
    </HelmetProvider>
  );
};

export default Home;

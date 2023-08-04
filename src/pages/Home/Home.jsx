import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchForm from "../../components/SearchForm/SearchForm";
import ParcelCard from "../../components/ParcelCard/ParcelCard";
import SearchHistoryList from "../../components/SearchHistoryList/SearchHistoryList";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectParcel,
  selectParcelQuery,
  selectParcelsList,
  selectSingleParcelData,
} from "../../redux/parcels/selectors";
import { fetchParcel } from "../../redux/parcels/operations";
import {
  setParcelQuery,
  setParcelsList,
} from "../../redux/parcels/parcelsSlice";

const Home = () => {
  const query = useSelector(selectParcelQuery);
  const isHistoryShown = useSelector(selectParcelsList)?.length !== 0;
  const dispatch = useDispatch();
  const parcel = useSelector(selectParcel);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // const parcels = useSelector(selectParcelsList);
  // console.log(parcel);
  // console.log(parcels);
  const parcelInfo = useSelector(selectSingleParcelData);
  console.log(parcelInfo);

  const parcelListData = useSelector(selectParcelsList);
  console.log(parcelListData);

  // const parcelInfo = data[0];

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
    console.log(value);

    dispatch(fetchParcel(body));
    dispatch(setParcelsList(value));
    dispatch(setParcelQuery(value));
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <SearchForm
        label={"Введіть номер ТТН"}
        handleSearchFormSubmit={handleSearchFormSubmit}
      />
      {isLoading && !error && <h3>Request in progress...</h3>}
      {error && <p>{error}</p>}
      {query && <ParcelCard parcelInfo={parcelInfo} />}
      {isHistoryShown && <SearchHistoryList />}
    </HelmetProvider>
  );
};

export default Home;

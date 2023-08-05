import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchForm from "../../components/SearchForm/SearchForm";
import ParcelCard from "../../components/ParcelCard/ParcelCard";

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


const Home = () => {
  // const [isParcelCardVisible, setIsParcelCardVisible] = useState(true);
  
  const isHistoryShown = useSelector(selectParcelsList)?.length !== 0;
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const parcelQuery = useSelector(selectParcelQuery);
  console.log(parcelQuery);

  const parcelInfo = useSelector(selectSingleParcelData);
  console.log(parcelInfo);

  const handleParcelCardClose = () => {
    // setIsParcelCardVisible(false);
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
    console.log(value);

    dispatch(fetchParcel(body));
    dispatch(setParcelsList(value));
    dispatch(setParcelQuery(value));
    // setIsParcelCardVisible(true);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <SearchForm
        name={"parcel"}
        label={"Введіть номер ТТН"}
        handleSearchFormSubmit={handleSearchFormSubmit}

       
      />
      {isLoading && !error && <h3>Request in progress...</h3>}
      {error && <p>{error}</p>}

      {parcelQuery !== "" && (
        <ParcelCard parcelInfo={parcelInfo} onClose={handleParcelCardClose} />
      )}
      {isHistoryShown && <SearchHistoryList />}
    </HelmetProvider>
  );
};

export default Home;

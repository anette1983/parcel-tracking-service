import { Grid, List, Typography } from "@mui/material";
import { SearchHistoryItem } from "../SearchHistoryItem/SearchHistoryItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectFetchedParcelsList,
  selectIsLoading,
  selectListParcelData,
  selectParcelsList,
} from "../../redux/parcels/selectors";
import { useEffect, useState } from "react";
import { fetchParcelsList } from "../../redux/parcels/operations";

const SearchHistoryList = () => {
  const dispatch = useDispatch();
  //  const data = useSelector(selectParcelsList);
  //  console.log(data);

  // const data = ["12345623456734", "12345623456735", "12345623456737"];
  const data = useSelector(selectListParcelData);
  const phone = "380633899529";

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [documentsArray, setDocumentsArray] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  console.log(fetchedData);
  console.log(documentsArray);
  const fetchedList = useSelector(selectFetchedParcelsList);
  console.log(fetchedList);

  useEffect(() => {
    const transformedData = data.map((parcelNum) => ({
      DocumentNumber: parcelNum,
      Phone: phone,
    }));

    setDocumentsArray(transformedData);
  }, [data, phone]);

  useEffect(() => {
    const body = {
      apiKey: "467661ce29e9281de136f9994193b7e7",
      modelName: "TrackingDocument",
      calledMethod: "getStatusDocuments",
      methodProperties: {
        Documents: documentsArray,
      },
    };
    console.log(body);
    const info = dispatch(fetchParcelsList(body));
    setFetchedData(info);
  }, [dispatch, documentsArray]);

  return (
    <>
      <Typography ml={2}> Історія пошуку: </Typography>
      {isLoading && !error && <h3>Request in progress...</h3>}
      {error && <p>{error}</p>}
      <List
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        {fetchedList.map((item) => (
          <SearchHistoryItem key={item.Number} parcel={item} />
          // <div key={item.Number}>{item.Number}</div>
        ))}
      </List>
    </>
  );
};

export default SearchHistoryList;

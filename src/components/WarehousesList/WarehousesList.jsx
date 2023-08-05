/* eslint-disable react-refresh/only-export-components */

import List from "@mui/material/List";

import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectError,
  selectFetchedParcelsList,
  selectIsLoading,
  selectListParcelData,
  selectParcelsList,
} from "../../redux/parcels/selectors";
import { fetchParcelsList } from "../../redux/parcels/operations";
import { Container, Typography } from "@mui/material";
import SearchHistoryItem from "../SearchHistoryItem/SearchHistoryItem";
import { selectWarehouses } from "../../redux/warehouses/selectors";
import WarehousesItem from "../WarehousesItem/WarehousesItem";

function WarehousesList() {
  const dispatch = useDispatch();

  //   const phone = "380633899529";

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { data, info } = useSelector(selectWarehouses);
  console.log(data);

  //   const [documentsArray, setDocumentsArray] = useState([]);
  //   const [fetchedData, setFetchedData] = useState([]);
  //   console.log(fetchedData);
  //   console.log(documentsArray);
  //   const fetchedList = useSelector(selectFetchedParcelsList);
  //   console.log(fetchedList);

  //   useEffect(() => {
  //     const transformedData = data.map((parcelNum) => ({
  //       DocumentNumber: parcelNum,
  //       Phone: phone,
  //     }));

  //     setDocumentsArray(transformedData);
  //   }, [data, phone]);

  //   useEffect(() => {
  //     const body = {
  //       apiKey: "467661ce29e9281de136f9994193b7e7",
  //       modelName: "TrackingDocument",
  //       calledMethod: "getStatusDocuments",
  //       methodProperties: {
  //         Documents: documentsArray,
  //       },
  //     };
  //     console.log(body);
  //     const info = dispatch(fetchParcelsList(body));
  //     setFetchedData(info);
  //   }, [dispatch, documentsArray]);

  return (
    <>
      <Typography m={3}> Знайдено: {info?.totalCount}</Typography>
      <List
        sx={{
          width: "80%",
          maxWidth: 720,
          bgcolor: "background.paper",
        }}
        // sx={{
        //   display: "flex",
        //   alignItems: "flex-start",
        //   flexWrap: { xs: "wrap", md: "nowrap" },
        // }}
      >
        {data.map((item) => (
          <WarehousesItem key={item.Ref} warehouse={item} />
        ))}
      </List>
    </>
  );
}

export default memo(WarehousesList);

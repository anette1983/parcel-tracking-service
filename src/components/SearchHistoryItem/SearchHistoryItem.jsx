import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  ListItem,
  Typography,
  Zoom,
} from "@mui/material";
import ParcelCard from "../ParcelCard/ParcelCard";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectListParcelData,
  selectParcelsList,
  selectSingleParcelData,
} from "../../redux/parcels/selectors";


// eslint-disable-next-line react/prop-types
export const SearchHistoryItem = ({ parcel }) => {

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // const parcelInfo = useSelector(selectSingleParcelData);
  // console.log(parcelInfo?.Number);
  console.log(parcel);

  return (
    <>
      {isLoading && !error && <h3>Request in progress...</h3>}
      {error && <p>{error}</p>}
      {parcel && (
        <ListItem sx={{ minWidth: 275 }} key={parcel?.Number}>
          <ParcelCard parcelInfo={parcel} />
        </ListItem>
      )}
    </>
  );
};

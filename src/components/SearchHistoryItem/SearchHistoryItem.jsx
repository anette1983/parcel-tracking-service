import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import Divider from "@mui/material/Divider";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
// import { toast } from "react-toastify";
import { selectError, selectIsLoading } from "../../redux/parcels/selectors";
import {
  deleteParcelFromList,
  setParcelQuery,
  setParcelsList,
} from "../../redux/parcels/parcelsSlice";
import { fetchParcel } from "../../redux/parcels/operations";

function SearchHistoryItem({ parcel }) {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [delId, setDelId] = useState();
  const dispatch = useDispatch();

  const handleDelete = (event, id) => {
    event.stopPropagation();
    setDelId(id);
    dispatch(deleteParcelFromList(id));

    console.log(id);
    console.log("Клік на видалення");

    alert(`Parcel deleted successfully`);
    return;
  };

  console.log(parcel);

  const handleItemClick = (parcel) => {
    const body = {
      apiKey: "467661ce29e9281de136f9994193b7e7",
      modelName: "TrackingDocument",
      calledMethod: "getStatusDocuments",
      methodProperties: {
        Documents: [
          {
            DocumentNumber: parcel,
            Phone: "380633899529",
          },
        ],
      },
    };
    dispatch(fetchParcel(body));
    dispatch(setParcelsList(parcel));
    dispatch(setParcelQuery(parcel));
    
  };

  return (
    <>
      {isLoading && !error && <h3>Request in progress...</h3>}
      {error && <p>{error}</p>}
      <ListItem
        sx={{
          "&:hover": {
            background: "#f0f0f0",
          },
        }}
        onClick={() => handleItemClick(parcel)}
        secondaryAction={
          <IconButton
            // color='warning'
            edge="end"
            aria-label="delete"
            onClick={(event) => handleDelete(event, parcel)}
            disabled={delId === parcel}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText primary={"Номер відправлення:"} secondary={parcel} />
      </ListItem>
      <Divider variant="inset" />
    </>
  );
}
SearchHistoryItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default SearchHistoryItem;

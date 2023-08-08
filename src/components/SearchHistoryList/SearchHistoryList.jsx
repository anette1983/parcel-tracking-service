import List from "@mui/material/List";
import { useDispatch, useSelector } from "react-redux";

import { selectParcelsList } from "../../redux/parcels/selectors";
import { Box, Button, Typography } from "@mui/material";
import SearchHistoryItem from "../SearchHistoryItem/SearchHistoryItem";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { clearParcelsList } from "../../redux/parcels/parcelsSlice";

function SearchHistoryList() {
  const dispatch = useDispatch();
  const data = useSelector(selectParcelsList);

  const handleSubmit = () => {
    dispatch(clearParcelsList());
  };

  return (
    <>
      <Box
        mt={3}
        mb={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          maxWidth: 720,
        }}
      >
        <Typography variant="h6" component="h2" ml={2}>
          {" "}
          Історія пошуку{" "}
        </Typography>
        <Button
          sx={{ height: 55, minWidth: "fit-content" }}
          type="button"
          variant="outlined"
          startIcon={<HighlightOffOutlinedIcon />}
          onClick={handleSubmit}
        >
          Очистити
        </Button>
      </Box>
      <List
        sx={{
          width: "90%",
          maxWidth: 720,
          bgcolor: "background.paper",
          borderRadius: "4px",
        }}
      >
        {data.map((item) => (
          <SearchHistoryItem key={item} parcel={item} />
        ))}
      </List>
    </>
  );
}

export default SearchHistoryList;

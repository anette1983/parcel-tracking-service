import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import StyledForm from "./SearchForm.styled";
import Button from "@mui/material/Button";
// import { useDispatch } from "react-redux";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchForm = ({ label, handleSearchFormSubmit }) => {
  // const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleChange = (evt) => setValue(evt.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!value) {
      alert(label);
      return;
    }
    handleSearchFormSubmit(value);
    // const isParcelExists = parcels.some(
    //   (parcel) => parcel.number === parcelNumber
    // );

    //   dispatch(addParcel(parcelNumber));
    console.log(value);
    setValue("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      {/* <Grid container> */}
      <Grid item xs={6}>
        <TextField
          sx={{ color: "white" }}
          label={label}
          variant="outlined"
          type="search"
          name="filter"
          value={value}
          onChange={handleChange}
          fullWidth
        />
        {/* </Grid> */}
      </Grid>
      <Button
        type="submit"
        variant="outlined"
        startIcon={<SearchOutlinedIcon />}
        onSubmit={handleSubmit}
      >
        Шукати
      </Button>
    </StyledForm>
  );
};

export default SearchForm;

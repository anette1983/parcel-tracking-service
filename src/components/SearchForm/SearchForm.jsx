import { Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import StyledForm from "./SearchForm.styled";
import Button from "@mui/material/Button";
// import { useDispatch } from "react-redux";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useSelector } from "react-redux";
import { selectParcelQuery } from "../../redux/parcels/selectors";

const SearchForm = ({ label, handleSearchFormSubmit}) => {
  // const dispatch = useDispatch();
  const parcelQuery = useSelector(selectParcelQuery);
  const [value, setValue] = useState("");
  
   useEffect(() => {
     setValue(parcelQuery);
   }, [parcelQuery]);
  
  console.log(value);

  const handleChange = (evt) => setValue(evt.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!value) {
      alert(label);
      return;
    }
    handleSearchFormSubmit(value);

    setValue(value);
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

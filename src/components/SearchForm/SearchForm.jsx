import { Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import StyledForm from "./SearchForm.styled";
import Button from "@mui/material/Button";
// import { useDispatch } from "react-redux";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useSelector } from "react-redux";
import { selectParcelQuery } from "../../redux/parcels/selectors";

const SearchForm = ({ name, label, handleSearchFormSubmit }) => {
  // const dispatch = useDispatch();
  const parcelQuery = useSelector(selectParcelQuery);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (name === "parcel") {
      setValue(parcelQuery);
    }
    if (name === "location") {
      setValue("Київ");
    }
  }, [name, parcelQuery]);

  const validate = () => {
    //  const value = "Your input string here";
    // let temp = {};
    let errorText = "";
    if (name === "parcel") {
      const regex = /^[25]\d{13}$/;
      errorText = regex.test(value)
        ? // && value.length === 14
          ""
        : "Номер має включати тільки 14 цифр і починатись з 2 або з 5";
      // location = value ? "" : "This field is required!";
      setError(errorText);
    } else if (name === "location") {
      // const regex = /^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ'’]+$/;
      const regex = /^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ'’-]+$/;
      errorText = regex.test(value)
        ? // && value.length === 14
          ""
        : "Тільки літери українською мовою";
      // location = value ? "" : "This field is required!";
      setError(errorText);
    }

    // return Object.values(temp).some((x) => x === "");
    return errorText === "";
  };

  const handleChange = (evt) => setValue(evt.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // const {name, value} = evt.target;
    if (!value) {
      alert(label);
      return;
    }
    if (validate()) {
      handleSearchFormSubmit(value);

      setValue(value);
    }
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
          name={name}
          value={value}
          onChange={handleChange}
          fullWidth
          error={error !== ""}
          helperText={error}
        />
        {/* </Grid> */}
      </Grid>
      <Button
        sx={{ maxHeight: 57, minWidth: "fit-content" }}
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

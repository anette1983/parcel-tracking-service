import { Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import StyledForm from "./SearchForm.styled";
import Button from "@mui/material/Button";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useSelector } from "react-redux";
import { selectParcelQuery } from "../../redux/parcels/selectors";
import { toast } from "react-toastify";

const SearchForm = ({ name, label, handleSearchFormSubmit }) => {
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
    let errorText = "";
    if (name === "parcel") {
      const regex = /^[25]\d{13}$/;
      errorText = regex.test(value)
        ? ""
        : "Номер має включати тільки 14 цифр і починатись з 2 або з 5";
      setError(errorText);
    } else if (name === "location") {
      const regex = /^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ'’-]+$/;
      errorText = regex.test(value) ? "" : "Тільки літери українською мовою";
      setError(errorText);
    }
    return errorText === "";
  };

  const handleChange = (evt) => setValue(evt.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!value) {
      toast.info(label);
      return;
    }
    if (validate()) {
      handleSearchFormSubmit(value);

      setValue(value);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
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
      </Grid>
      <Button
        sx={{ height: 55, minWidth: "fit-content" }}
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

SearchForm.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleSearchFormSubmit: PropTypes.func,
};

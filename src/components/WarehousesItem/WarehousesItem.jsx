import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import { ListItemIcon, Tooltip } from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function WarehousesItem({ warehouse }) {
  return (
    <>
      <ListItem
        secondaryAction={
          <Tooltip title="Перейти на сторінку відділення">
            <IconButton
              edge="end"
              aria-label="onWarehousePage"
              component="a"
              href={`https://novaposhta.ua/office/view/id/${warehouse.Number}/city/${warehouse.CityDescription}`}
              target="_blank"
            >
              <ExitToAppIcon />
            </IconButton>
          </Tooltip>
        }
        sx={{
          "&:hover": {
            background: "#f0f0f0",
          },
        }}
      >
        <ListItemIcon>
          <HomeWorkIcon />
        </ListItemIcon>

        <ListItemText primary={warehouse.Description} />
      </ListItem>
      <Divider variant="middle" />
    </>
  );
}

WarehousesItem.propTypes = {
  warehouse: PropTypes.object,
};

export default WarehousesItem;

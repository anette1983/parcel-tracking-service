import List from "@mui/material/List";

import { useSelector } from "react-redux";

import { Typography } from "@mui/material";
import { selectWarehouses } from "../../redux/warehouses/selectors";
import WarehousesItem from "../WarehousesItem/WarehousesItem";

function WarehousesList() {
  const { data, info } = useSelector(selectWarehouses);

  return (
    <>
      {data && (
        <Typography mt={3} mb={3}>
          {" "}
          Знайдено: {info?.totalCount}
        </Typography>
      )}
      <List
        sx={{
          width: "90%",
          bgcolor: "background.paper",
          margin: "0 auto",
          borderRadius: "4px",
        }}
      >
        {data?.map((item) => (
          <WarehousesItem key={item.Ref} warehouse={item} />
        ))}
      </List>
    </>
  );
}

export default WarehousesList;

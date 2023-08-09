import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectWarehouses,
} from "../../redux/warehouses/selectors";
import { setCurrentPage } from "../../redux/warehouses/warehousesSlice";

export default function Paginator() {
  const currentPage = useSelector(selectCurrentPage);
  const [totalPages, setTotalPages] = useState(0);
  const { info } = useSelector(selectWarehouses);
  const limit = 50;
  const dispatch = useDispatch();

  useEffect(() => {
    if (info && typeof info?.totalCount === "number") {
      const { totalCount } = info;
      setTotalPages(Math.ceil(totalCount / limit));
    }
  }, [dispatch, info]);

  const handleChange = (event, value) => {
    dispatch(setCurrentPage(value));
  };

  return (
    totalPages > 2 && (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        mt={3}
        mb={3}
      >
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </Stack>
      </Box>
    )
  );
}

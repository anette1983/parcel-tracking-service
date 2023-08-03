import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoading,
  selectError,
  selectCurrentPage,
  selectWarehouses,
} from "../../redux/warehouses/selectors";
import { fetchWarehouses } from "../../redux/warehouses/operations";
import { useEffect } from "react";

const body = {
  apiKey: "467661ce29e9281de136f9994193b7e7",
  modelName: "Address",
  calledMethod: "getWarehouses",
  methodProperties: {
    CityName: "Київ",
    Limit: "50",
    Page: 1,
  },
};

const Warehouses = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectCurrentPage);
  const error = useSelector(selectError);
  const { data, info } = useSelector(selectWarehouses);
  console.log(info.totalCount);

  useEffect(() => {
    dispatch(fetchWarehouses(body));
  }, [dispatch]);

  return (
    <ul>
      {info.totalCount}
      {data?.map((warehouse) => {
        return <li key={warehouse.Ref}>{warehouse.Ref}</li>;
      })}
    </ul>
  );
};

export default Warehouses;

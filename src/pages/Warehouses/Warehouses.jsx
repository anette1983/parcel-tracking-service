import { useDispatch, useSelector } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  selectIsLoading,
  selectError,
  selectCurrentPage,
  selectWarehouses,
} from "../../redux/warehouses/selectors";
import { fetchWarehouses } from "../../redux/warehouses/operations";
import { useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import {
  setCityQuery,
  setCurrentPage,
} from "../../redux/warehouses/warehousesSlice";
import WarehousesList from "../../components/WarehousesList/WarehousesList";
import Paginator from "../../components/Paginator/Paginator";
import { createBody } from "../../services/createBody";

const body = createBody("Київ");

const Warehouses = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectCurrentPage);
  const error = useSelector(selectError);

  const { data, info } = useSelector(selectWarehouses);
  console.log(info?.totalCount);
  //*undef
  console.log(body);

  useEffect(() => {
    dispatch(fetchWarehouses(body));
    dispatch(setCityQuery(body.methodProperties.CityName));
  }, [dispatch]);

  const handleSearchFormSubmit = (value) => {
    const body = createBody(value);

    console.log(body);

    dispatch(fetchWarehouses(body));
    dispatch(setCityQuery(value));
    dispatch(setCurrentPage(1));
  };

  console.log(data);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Відділення</title>
      </Helmet>
      <SearchForm
        name={"location"}
        label={"Введіть населений пункт"}
        handleSearchFormSubmit={handleSearchFormSubmit}
      />
      {isLoading && !error && <h3>Request in progress...</h3>}
      {error && <p>{error}</p>}
      <WarehousesList />
      {data && <Paginator />}
    </HelmetProvider>
  );
};

export default Warehouses;

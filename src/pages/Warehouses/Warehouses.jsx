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
import Loader from "../../components/Loader/Loader";

const body = createBody("Київ");

const Warehouses = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const { data } = useSelector(selectWarehouses);

  useEffect(() => {
    dispatch(fetchWarehouses(body));
    dispatch(setCityQuery(body.methodProperties.CityName));
    // dispatch(setCityQuery(cityName));
  }, [dispatch]);

  const handleSearchFormSubmit = (value) => {
    const body = createBody(value);

    dispatch(fetchWarehouses(body));
    dispatch(setCityQuery(value));
    dispatch(setCurrentPage(1));
  };


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
      {isLoading && !error && <Loader />}
      {error && <p>{error}</p>}
      <WarehousesList />
      {data && <Paginator />}
    </HelmetProvider>
  );
};

export default Warehouses;

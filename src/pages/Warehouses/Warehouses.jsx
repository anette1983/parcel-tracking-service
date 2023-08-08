import { useDispatch, useSelector } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  selectIsLoading,
  selectError,
  selectWarehouses,
  selectCurrentPage,
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


const body = createBody();

const Warehouses = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { data } = useSelector(selectWarehouses);
  const page = useSelector(selectCurrentPage);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    dispatch(fetchWarehouses(body));
  }, [dispatch]);

  useEffect(() => {
    if (body) {
      const { CityName, Page } = body.methodProperties;

      dispatch(setCityQuery(CityName));
      dispatch(setCurrentPage(Page));
    }
  }, [dispatch]);

  const handleSearchFormSubmit = (value) => {
    dispatch(setCurrentPage(1));
    dispatch(setCityQuery(value));
    const body = createBody(value);
    dispatch(fetchWarehouses(body));
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
      {!error && <WarehousesList />}
      {data && <Paginator />}
    </HelmetProvider>
  );
};

export default Warehouses;

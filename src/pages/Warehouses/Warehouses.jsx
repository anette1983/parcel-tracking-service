import { useDispatch, useSelector } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  selectIsLoading,
  selectError,
  selectWarehouses,
  selectCurrentPage,
  selectCityQuery,
} from "../../redux/warehouses/selectors";
import { fetchWarehouses } from "../../redux/warehouses/operations";
import { useEffect, useMemo, useRef } from "react";

import SearchForm from "../../components/SearchForm/SearchForm";
import {
  setCityQuery,
  setCurrentPage,
} from "../../redux/warehouses/warehousesSlice";
import WarehousesList from "../../components/WarehousesList/WarehousesList";
import Paginator from "../../components/Paginator/Paginator";
import { createBody } from "../../services/createBody";
import Loader from "../../components/Loader/Loader";

const Warehouses = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { data } = useSelector(selectWarehouses);
  const page = useSelector(selectCurrentPage);
  const city = useSelector(selectCityQuery);
  const memoizedBody = useMemo(() => createBody(city, page), [city, page]);
  const previousBodyRef = useRef(memoizedBody);

  useEffect(() => {
    dispatch(setCityQuery("Київ"));
    dispatch(setCurrentPage(1));
  }, [dispatch]);

  useEffect(() => {
    if (memoizedBody !== previousBodyRef.current) {
      window.scrollTo(0, 0);
      dispatch(fetchWarehouses(memoizedBody));
      dispatch(setCityQuery(memoizedBody.methodProperties.CityName));
      dispatch(setCurrentPage(memoizedBody.methodProperties.Page));
      previousBodyRef.current = memoizedBody;
    }
  }, [dispatch, memoizedBody, city, page]);

  const handleSearchFormSubmit = (value) => {
    dispatch(setCurrentPage(1));
    dispatch(setCityQuery(value));
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
      {error && <p>{error}</p>}
      {isLoading && !error ? (
        <Loader />
      ) : (
        !isLoading && data && <WarehousesList />
      )}
      {!isLoading && data && <Paginator />}
    </HelmetProvider>
  );
};

export default Warehouses;

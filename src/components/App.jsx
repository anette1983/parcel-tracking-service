import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Warehouses = lazy(() => import("../pages/Warehouses/Warehouses.jsx"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

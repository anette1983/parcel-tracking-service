import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#ffffff",
  //   },
  //   secondary: {
  //     main: "#005B74",
  //   },
  // },
  typography: {
    fontFamily: [
      " ui - rounded",
      "Hiragino Maru Gothic ProN",
      "Quicksand",
      "Comfortaa",
      "Manjari",
      "Arial Rounded MT",
      "Arial Rounded MT Bold",
      "Calibri",
      "source - sans - pro",
      "sans - serif",
    ].join(","),
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/parcel-tracking-service">
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

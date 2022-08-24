import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Characters from "./pages/Characters";
import Quotes from "./pages/Quotes";
import Details from "./pages/Details";

import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="characters" element={<Characters />} />
          <Route path="character/:char_id" element={<Details />} />
          <Route path="quotes" element={<Quotes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

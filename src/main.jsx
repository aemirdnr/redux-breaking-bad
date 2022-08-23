import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Navbar from "./components/Navbar";
import Characters from "./pages/Characters";
import Quotes from "./pages/Quotes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="characters" element={<Characters />} />
        <Route path="quotes" element={<Quotes />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

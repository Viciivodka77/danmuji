import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'virtual:uno.css';
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./components/Layout/Layout.tsx";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route element={<Layout />}>
                  <Route index element={<App />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
);

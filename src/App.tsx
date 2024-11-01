import Labs from "./Labs";
import Kanbas from "./kanbas";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import store from "./kanbas/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Kanbas" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}

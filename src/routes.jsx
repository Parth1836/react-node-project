import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./client/pages/Dashboard";
import PromiseCallback from "./client/react-concepts/PromiseCallbackAsyncAwait";

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />{" "}
        <Route exact path="/dashboard" element={<Dashboard />} />{" "}
        <Route
          exact
          path="/promise-callback-async-await"
          element={<PromiseCallback />}
        />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default MainRoutes;

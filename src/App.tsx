import React, { lazy } from "react";
import { Route, Routes } from "react-router";

import { ROUTES } from "@/constants";
import { LazyElement } from "@/components/lazy-element/lazy-element.component";

const UserPage = lazy(() => import("@/pages/user.component"));
const HomePage = lazy(() => import("@/pages/home.component"));

function App() {
  return (
    <Routes>
      <Route
        path={ROUTES.USER}
        element={
          <LazyElement>
            <UserPage />
          </LazyElement>
        }
      />
      <Route
        path={ROUTES.HOME}
        element={
          <LazyElement>
            <HomePage />
          </LazyElement>
        }
      />
    </Routes>
  );
}

export default App;

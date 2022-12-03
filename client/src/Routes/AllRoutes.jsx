import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signUp" element={<SignupPage />} />
    </Routes>
  );
};

export default AllRoutes;

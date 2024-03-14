/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";
import { auth } from "../firebase"; 

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element }) => {
  const currentUser = auth.currentUser;

  return currentUser ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/auth/login" replace />
  );
};

export default PrivateRoute;

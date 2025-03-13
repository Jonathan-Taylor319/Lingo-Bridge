import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserTokenContext from "../contexts/TokenContext"; // Import the context

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(UserTokenContext); // Get auth status

  return isAuthenticated ? children : <Navigate to="/sign-in" replace />;
}

import React from "react";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocalState } from "../util/useLocalStorage";
import adminSecurity from "../services/adminSecurity";

const PrivateRoute = ({ children}) => {
  const [jwt, setJwt] =useLocalState("", "jwt");
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState(null);

  if(jwt) {
    adminSecurity(`/admin/auth/test?token=${jwt}`, "GET", jwt).then(
      (isValid) => {
      setIsValid(isValid);
      setIsLoading(false);
    }
    );
  }else {
    return <Navigate to="/admin" />;
  }
 

  return isLoading ? (
    <div>Loading...</div>
  ) : isValid === true ? (
    children
  ) : (
    <Navigate to="/admin" />
  );
};

export default PrivateRoute;
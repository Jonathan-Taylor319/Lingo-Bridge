import React, { createContext, useEffect, useState } from "react";

const UserTokenContext = createContext();

export const UserTokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Function to update the user token    
  const setUserToken = (newToken) => {
    setToken(newToken);
    sessionStorage.setItem("userToken", newToken);
  };

  // Set token from session storage when app loads/user logs in
  useEffect(() => {
    const savedToken = sessionStorage.getItem("userToken");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  // Function to remove the token (for logout, etc.)
  const clearUserToken = () => {
    setToken(null);
    sessionStorage.removeItem("userToken");
  };

  // Derive auth status from token
  const isAuthenticated = token !== null;

  // Wrap the app with UserTokenContext.Provider to supply the state globally
  return (
    <UserTokenContext.Provider value={{ token, setUserToken, clearUserToken, isAuthenticated }}>
      {children}
    </UserTokenContext.Provider>
  );
};

export default UserTokenContext;

import React, { createContext, useContext, useEffect, useState } from "react";

// Use createContext function to create a context
const UserTokenContext = createContext()

// Create a provider to supply and manage the state
export const UserTokenProvider = ({ children }) => {
  const [token, setToken] = useState(null)

  // Function to update the user token    
  const setUserToken = (newToken) => {
    setToken(newToken);
  };

  // Set token from session storage when app loads
  // they will have to re-log when closing tab/browser
  // if you wanted to persist change sessionStorage to localStorage
  useEffect(() => {
    const savedToken = sessionStorage.getItem("userToken")
    if (savedToken) {
      setToken(savedToken)
    }
  }, [])

  // Function to remove the token (for logout, etc.)    
  const clearUserToken = () => {
    setToken(null);
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

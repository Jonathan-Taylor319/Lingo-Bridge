import React, { createContext, useState } from "react";

// Use createContext function to create a context
const UserTokenContext = createContext();

// Create a provider to supply the state
export const UserTokenProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Manage the token state

  // Function to update "set" the user token    
  const setUserToken = (newToken) => {
    setToken(newToken);
  };

  // Function to remove the token (for logout, etc.)    
  const clearUserToken = () => {
    setToken(null);
  };

  // Wrap the app with UserTokenContext.Provider to supply the state globally
  return (
    <UserTokenContext.Provider value={{ token, setUserToken, clearUserToken }}>
      {children}
    </UserTokenContext.Provider>
  );
};

export default UserTokenContext;

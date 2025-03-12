import React, { createContext, useState, useEffect, useContext } from "react";
import UserTokenContext from "./TokenContext"; // Import UserTokenContext to get isAuthenticated

const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const { isAuthenticated } = useContext(UserTokenContext); // Access isAuthenticated from UserTokenContext
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(null); // Store avatar URL

  const generateAvatar = (username) => {
    return `https://api.dicebear.com/9.x/bottts/svg?seed=${username}`;
  };

  // Clear user info when isAuthenticated changes to false
  useEffect(() => {
    if (!isAuthenticated) {
      setUserName(""); // Clear userName
      setUserEmail(""); // Clear userEmail
      setAvatarUrl(null); // Clear avatar URL
    }
  }, [isAuthenticated]); // Dependency array listens for changes in isAuthenticated

  useEffect(() => {
    if (isAuthenticated) {
      const fetchUserData = async () => {
        // Fetch user data when authenticated
        try {
          const response = await fetch("http://localhost:8000/user/get-user/", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Token ${sessionStorage.getItem("userToken")}`,
            },
          });

          if (response.ok) {
            const body = await response.json();
            setUserName(body.username);
            setUserEmail(body.email);
            setAvatarUrl(generateAvatar(body.username));
          } else {
            console.error("Failed to fetch user data.");
          }
        } catch (error) {
          console.error("Error in fetchUserData:", error);
        }
      };
      fetchUserData();
    }
  }, [isAuthenticated]); // Only run when isAuthenticated changes

  return (
    <UserInfoContext.Provider value={{ userName, userEmail, avatarUrl, setUserName, setUserEmail }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export { UserInfoContext };

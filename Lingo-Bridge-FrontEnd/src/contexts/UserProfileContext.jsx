import { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../api/api";

const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  // Load profile from sessionStorage if it exists
  useEffect(() => {
    // Check if the profile exists in sessionStorage before attempting to parse
    const storedProfile = sessionStorage.getItem("profile");

    if (storedProfile) {
      try {
        setProfile(JSON.parse(storedProfile)); // Parse the profile only if it exists
      } catch (error) {
        console.error("Error parsing profile from sessionStorage:", error);
      }
    } else {
      const fetchProfile = async () => {
        try {
          const user = await getUser(); // Fetch profile from API if not in sessionStorage
          setProfile(user);
          sessionStorage.setItem("profile", JSON.stringify(user)); // Store it in sessionStorage
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };
      fetchProfile();
    }
  }, [])

  // Logout: Clear profile from sessionStorage
  const logout = () => {
    setProfile(null); // Clear profile from state
    sessionStorage.removeItem("profile"); // Remove profile from sessionStorage
  };

  return (
    <UserProfileContext.Provider value={{ profile, logout }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => useContext(UserProfileContext);

import { createContext, useContext, useEffect, useState } from "react";
import { useUserToken } from './TokenContext'
import { getUser } from "../api/api";

const UserProfileContext = createContext()

export const UserProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null)
  const { token } = useUserToken()

  useEffect(() => {
    if (token) {
      const fetchProfile = async () => {
        try {
          const user = await getUser(token)
          setProfile(user)
          sessionStorage.setItem("profile", JSON.stringify(user))
        } catch (error) {
          console.error("error fetching profile:", error)
        }
      }
      fetchProfile
    } else {
      const storedProfile = sessionStorage.getItem("profile")
      if (storedProfile) {
        try {
          setProfile(JSON.parse(storedProfile))
        } catch (error) {
          console.error("error parsing profile from sessionStorage", error)
        }
      }
    }
  }, [token] )

  const logout = () => {
    setProfile(null)
    sessionStorage.removeItem("profile")
  }

  return(
    <UserProfileContext.Provider value={{ profile, logout }}>
      { children }
    </UserProfileContext.Provider>
  )
}

export const useUserProfile = () => useContext(UserProfileContext)

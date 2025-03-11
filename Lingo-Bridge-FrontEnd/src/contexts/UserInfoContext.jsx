import React, { createContext, useContext, useEffect, useState } from "react";
import UserTokenContext from "./TokenContext";

const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
    const { token } = useContext(UserTokenContext);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [avatarUrl, setAvatarUrl] = useState(null); // Store avatar URL

    const generateAvatar = (username) => {
        // Use the new base URL and replace "Eden" with the user's username
        return `https://api.dicebear.com/9.x/bottts/svg?seed=${username}`;
    };

    useEffect(() => {
        const fetchUserData = async () => {
            if (!token) return;

            try {
                const response = await fetch("http://localhost:8000/user/get-user/", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Token ${token}`,
                    },
                });

                if (response.ok) {
                    const body = await response.json();
                    setUserName(body.username);
                    setUserEmail(body.email);
                    setAvatarUrl(generateAvatar(body.username)); // Generate avatar when user loads
                } else {
                    console.error("Failed to fetch user data.");
                }
            } catch (error) {
                console.error("Error in fetchUserData:", error);
            }
        };

        fetchUserData();
    }, [token]);

    return (
        <UserInfoContext.Provider value={{ userName, userEmail, avatarUrl, setUserName, setUserEmail }}>
            {children}
        </UserInfoContext.Provider>
    );
};

export { UserInfoContext };

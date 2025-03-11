import React, { useContext, useState, useEffect } from "react";
import UserTokenContext from "../contexts/TokenContext";
import { getUser } from '../api/api'

export default function ProfilePage() {
    const { token } = useContext(UserTokenContext);

    /*basic fetch and getUser were not working, worked with Umar for awhile and we found might be an
    issue with the import or the getuser or the basic fetch. running with this for now */
    useEffect(() => {
        // console.log("Token received in ProfilePage:", token);  // Log token value
        if (token) {
            // console.log("Calling fetch directly...");
            const fetchUserData = async () => {
                try {
                    const response = await fetch("http://localhost:8000/user/get-user/", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Token ${token}`,
                        },
                    });
                    // console.log("Raw response status:", response.status);
                    // console.log("Raw response statusText:", response.statusText);
                    const body = await response.json();
                    console.log("Raw body from fetch:", body);
                    if (body) {
                        // console.log("Parsed body:", body);
                    } else {
                        // console.log("No body or empty response.");
                    }
                } catch (error) {
                    console.error("Error in fetchUserData:", error);
                }
            };
            fetchUserData();
        } else {
            console.error("No token found.");
        }
    }, [token]);
    return (
        <div>
            <h1>Profile Page</h1>
        </div>
    );
}
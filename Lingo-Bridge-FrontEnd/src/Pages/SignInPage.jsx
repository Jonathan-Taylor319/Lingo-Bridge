import React, { useContext, useState, useEffect } from "react";
import UserTokenContext from "../contexts/TokenContext";
import { useNavigate } from "react-router-dom";
import SignInUpButtons from "../components/SignInUpButtons";

export default function SignInPage() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const { setUserToken } = useContext(UserTokenContext);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Check if token exists on page load or refresh
    useEffect(() => {
        const savedToken = sessionStorage.getItem("userToken");
        if (savedToken) {
            setUserToken(savedToken);
            navigate("/signedinhome");
        }
    }, [setUserToken, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage("");

        try {
            const response = await fetch("http://3.149.23.222:8000/user/get-token/", {
                method: "POST", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setUserToken(data.token); 
                sessionStorage.setItem("userToken", data.token);
                navigate("/signedinhome");
            } else {
                setErrorMessage("Real SUS 🕵️‍♂️. Check username and password.");
            }
        } catch (error) {
            console.error("ERROR:", error);
            setErrorMessage("There was an error with the request.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            < SignInUpButtons />
            <h2>No Cap 🧢 the Hype is real! Sign In:</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit} className="signInForm">
                <label htmlFor="username">User Name:</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={formData.username}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />     
                <button type="submit" className="infoFormButton" style={{ marginTop: "10px", alignSelf: "center" }}>
                    {isLoading ? "Signing in..." : "Sign in"}
                </button>
            </form>
        </>
    );
}

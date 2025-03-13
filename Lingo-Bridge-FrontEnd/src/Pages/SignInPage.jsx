import React, { useContext, useState, useEffect } from "react";
import UserTokenContext from "../contexts/TokenContext";
import SignedInHome from "./SignedInHome";

export default function SignInPage() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const { setUserToken, token } = useContext(UserTokenContext);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState("sign-in"); // Controls rendering

    // Check if token exists on page load or refresh
    useEffect(() => {
        const savedToken = sessionStorage.getItem("userToken");
        if (savedToken) {
            setUserToken(savedToken); // Restore token into context
            setCurrentPage("signed-in-home"); // Render signed-in home if a token exists
        }
    }, [setUserToken]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage("");

        try {
            const response = await fetch("http://localhost:8000/user/get-token/", {
                method: "POST", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setUserToken(data.token); // Set token in context
                sessionStorage.setItem("userToken", data.token); // Store token in sessionStorage
                setCurrentPage("signed-in-home"); // Change page state to "signed-in-home"
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.detail || "Something went wrong.");
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
            {currentPage === "sign-in" ? (
                <>
                    <h2 sx={{ self: "center" }}>No Cap 🧢 the Hype is real! Sign In:</h2>
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
                    
                    {errorMessage && (
                        <div
                            style={{
                                background: 'linear-gradient(135deg, #2a7f62, #2196f3)',
                                color: 'white',
                                border: '2px solid black',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                                padding: '20px',
                                borderRadius: '8px',
                                maxWidth: "500px",
                                margin: '20px auto',
                                textAlign: 'center',
                                fontSize: '16px',
                                whiteSpace: 'pre-line'
                            }}
                        >
                            {errorMessage}
                        </div>
                    )}
                </>
            ) : (
                <SignedInHome /> // Render the signed-in home page instead of navigating
            )}
        </>
    );
}

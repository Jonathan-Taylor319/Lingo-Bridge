import React, { useContext, useState } from "react"
import { login } from "../api/api"
import UserTokenContext from "../contexts/TokenContext"
import { useNavigate } from "react-router-dom"

export default function SignInPage() {       
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    // need to call my context to update it
    // need to call the function to set the state
    // need to also supply the current state so we can change it
    const { setUserToken } = useContext(UserTokenContext)
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
   
    // handleChange - lets us update input field
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrorMessage("")
        //clear out the token and storage so it can be and see the re-asignment at sign-in
        setUserToken(null)
        sessionStorage.removeItem("userToken")
        
        try {
            const response = await login(formData)
            
            // if credentials good = token string, if not api/error
            console.log(response)

            if (typeof response === "string" && response.length > 30) {
                setUserToken(response.token);
            sessionStorage.setItem("userToken", response.token);
            navigate("/signedinhome");
        } else if (response.errors) { 
            // If the API returns field-specific errors
            const errorMessages = Object.entries(response.errors)
                .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
                .join("\n");
            setErrorMessage(errorMessages);
        } else {
            setErrorMessage("Login failed. Please check your credentials.");
        }
    } catch (error) {
        console.error("Error logging in:", error);
        
        // If the API returned a 400 response with JSON errors
        if (error.response && error.response.status === 400) {
            const errorData = await error.response.json();
            const errorMessages = Object.entries(errorData)
                .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
                .join("\n");
            setErrorMessage(errorMessages);
        } else {
            setErrorMessage("An error occurred. Please try again later.");
        }
    } finally {
        setIsLoading(false);
    }
};

    return (
        <>
            <h2 sx={{ self: "center" }}>No Cap 🧢 the Hype is real! Sign In:</h2>
            <form onSubmit={handleSubmit} className="signInForm">  
                <label htmlFor="username">User Name:</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={ formData.username }
                    onChange={ handleChange }
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password"
                    value={ formData.password }
                    onChange={ handleChange }
                />     
                <button type="submit" className='infoFormButton' style={{ marginTop: "10px", alignSelf: "center" }}>
                    {isLoading ? "Signing in..." : "Sign in"}
                </button>
            </form>
            {errorMessage && <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>}       
        </>
    )
}

import React, { useContext, useState } from "react"
import { login } from "../api/api"
import UserTokenContext from "../contexts/TokenContext"
import { useNavigate } from "react-router-dom"

export default function SignInPage() {    
    const  [isAuthenticated , setIsAuthenticated] = useState(false)
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
            //console.log(response)

            if (typeof response === "string" && response.length > 30) {
                setUserToken(response)
                sessionStorage.setItem("userToken", response)
                setIsAuthenticated(true)
                navigate("/signedinhome")
        } else { 
            setErrorMessage("SKIBIDI TOILET, YOU SUS! check username and password...make sure you have an account BOZO!")
        }
        } catch (error) {
            setErrorMessage("A error occured. Please try later.")
        }  finally {
            setIsLoading(false)
        }
    }
    
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
             {/* Error Message */}
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
    )
}
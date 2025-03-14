import { Padding, PagesRounded } from "@mui/icons-material";
import React from "react";
import { useNavigate, useLocation } from "react-router";

export default function SignInUpButtons() {
    const navigate = useNavigate()
    const location = useLocation()
    const currentPath = location.pathname

    

    return (

        <div className="sign-up-in-button-div">
            {currentPath !== "/" && <button onClick={() => navigate("/")}>Home</button>}
            {currentPath !== "/sign-up" && <button onClick={() => navigate("/sign-up")}>Sign up</button>}
            {currentPath !== "/sign-in" && <button onClick={() => navigate("/sign-in")}>Sign In</button>}
            {currentPath !== "/about" && <button onClick={() => navigate("/about")}>About</button>}
        </div>
        
    )
}
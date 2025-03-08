import React, { useState } from "react";
import UserTokenContext from "../contexts/TokenContext";

export default function SignInPage( UserTokenContext) {       
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    // handleChange - lets us update input field
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can perform the action after the form is submitted, like calling an API
        console.log(formData); // For example, log the form data to the console
    };

    return (
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
            <button type="submit" className='infoFormButton' style={{marginTop:"10px", alignSelf:"center"}}>Sign in</button>
        </form>       
    );
}



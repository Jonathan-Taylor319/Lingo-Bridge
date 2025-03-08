import React, { useState, useEffect } from 'react'


//onSubmit - passed down function from parent
export default function UserInfoForm({ onSubmit }) {

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
    })

//handlechange - lets us update input field
//setform - update corrext field and the ...prev will leave what was already there
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
  };


    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (  
        <form className="userInfoForm" onSubmit={ handleSubmit }>
            <label htmlFor="email">Email:</label>
            <input 
                type="email" 
                id="email" 
                name="email"
                value={ formData.email }
                onChange={ handleChange }
            />
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
                type ="password" 
                id="password" 
                name="password"
                value={ formData.password }
                onChange={ handleChange }
            />     
            <button type="submit" className='infoFormButton'>Sign Up</button>
        </form>       
    )
}
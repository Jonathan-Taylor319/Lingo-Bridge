import React, { useState } from "react";
import { signup } from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate()

  // handleChange - lets us update input field
  // setForm - update correct field and the ...prev will leave what was already there
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // handleSubmit - submits the form and sends the data to the API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    
    try {
      const response = await signup(formData);
      const { body, status, statusText } = response
      const { username, email, password } = body
      
      console.log({ body, status, statusText })
      console.log({ username, email, password })
      
      if (status >= 200 && status < 300) {  // Check if response is successful
        setMessage(`That's some OHIO RIZZ! User ${formData.username} created!`)
        setMessageType("success")
  
        // Clear form fields after successful signup
        setFormData({ email: "", username: "", password: "" })

        //wait 1.5 seconds and then redirect
        setTimeout(() => {
        navigate("/sign-in")
        }, 1500)
      } else {
          // declare issues with POST to apply with message
          // .map loops through the item in body.username(etc) and adds the string interpolation before it
          const errors = [
            ...(body?.username?.map(msg => `Username: ${msg}`) || []),
            ...(body?.email?.map(msg => `Email: ${msg}`) || []),
            ...(body?.password?.map(msg => `Password: ${msg}`) || []),
          ].filter(Boolean)
          const errorMessage = errors.length ? errors.join("\n") : statusText
        setMessage(`Straight Dog Water BROOOOOOO! Bad Request:\n ${errorMessage}`)
        setMessageType("error");
      }
    } catch (error) {
      setMessage(`Signup failed: ${error.message || "Unexpected error"}`)
      setMessageType("error")
    } finally {
      setTimeout(() => {
        setIsSubmitting(false)
      }, 3000)
    }
  }
  
  return (
    <div>
      {message && (
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
          {message}
        </div>
      )}
      <h2 sx={{self:"center"}}>Don't be mid Bozo 🤡 Sign up and learn now:</h2>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        
        <label htmlFor="username">User Name:</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={formData.username} 
          onChange={handleChange} 
        />
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
        />    
        <button type="submit" style={{display: "block", marginTop: "20px", marginLeft: "auto", marginRight: "auto"}} disabled={isSubmitting}>
          {isSubmitting ? "Signing Up...." : "Sign Up"}</button>
      </form>
    </div>
  );
}

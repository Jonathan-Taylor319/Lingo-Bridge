import React, { useState } from "react";
import { signup } from "../../api/api";  // Import your API call for signup

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");  // To store success or error messages
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  // handleChange - lets us update input field
  // setForm - update correct field and the ...prev will leave what was already there
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handleSubmit - submits the form and sends the data to the API
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Here we call the signup API function, passing the formData
    try {
      const response = await signup(formData);  // Call the signup API with form data

      // If the signup is successful, show success message
      setMessage("Signup successful! Welcome!");
      setMessageType("success");

      // Clear form fields after successful signup
      setFormData({ email: "", username: "", password: "" });
    } catch (error) {
      // If there's an error, show an error message
      setMessage("Signup failed. Please try again.");
      setMessageType("error");
    }
  };

  return (
    <div>
      {/* Display success or error message */}
      {message && (
        <div
          style={{
            color: messageType === "success" ? "green" : "red",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          {message}
        </div>
      )}

      <form className="userInfoForm" onSubmit={handleSubmit}>
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

        <button 
          type="submit" 
          style={{display: "block", marginTop: "20px", marginLeft: "auto", marginRight: "auto"}}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import UserInfoForm from "../components/UserInfoForm";
import { signup } from "../../api/api";

export default function SignUpPage() {
  // need to create states to track call
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, SetMessage] = useState("");

  // This function will handle the form submission and call the signup API
  const handleSubmit = async (formData) => {
    setLoading(true);
    SetMessage(""); // Clear previous messages
    setError(null); // Reset error message before making request

    try {
      // Call the signup API here, passing the form data
      const newUser = await signup(formData);

      // If the signup is successful, display the success message
      if (newUser) {
        setUser(newUser); // Set the user data
        SetMessage(`Welcome, OHIO RIZZ ${newUser.username} TIME TO COOK!`); // Success message
      }
    } catch (err) {
      // Catch any errors (e.g., username already exists)
      setError(err.message);  // Capture the error message
      setUser(null); // Reset user state in case of error
      SetMessage("Signup failed. That input was straight DOG WATER! YOU DOIN TOO MUCH! NO OHIO RIZZ."); // Failure message
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="sign">
      {/* Pass the form data to handleSubmit on form submission */}
      <UserInfoForm onSubmit={handleSubmit} />
      {loading && <p>Loading...</p>}

      {/* Show the success message only when the user is created */}
      {user && <p>Welcome, OHIO RIZZ {user.username} TIME TO COOK!</p>}

      {/* Show the error message only when there's an error */}
      {error && <p style={{ color: "red" }}>{message}</p>}
    </div>
  );
}

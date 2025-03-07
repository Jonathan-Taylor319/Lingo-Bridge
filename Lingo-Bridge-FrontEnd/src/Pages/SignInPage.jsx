import { Navigate } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import { useState } from "react";

export default function SignInPage({ handleInputChange, formData, handleToken }) {
  const [responseMsg, setResponseMsg] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const context = { username: formData.username, password: formData.password };
    try {
      const token = await login(context);
      if (!token) {
        setResponseMsg("Error logging in");
      } else {
        handleToken(token);
        setShouldRedirect(true);
      }
    } catch (error) {
      setResponseMsg("An error occurred. Please try again.");
    }
  };

  if (shouldRedirect) {
    return <Navigate to="/loggedinhome" />;
  }

  return (
    <SignInForm
      handleInputChange={handleInputChange}
      formData={formData} // Ensure consistent naming
      handleToken={handleToken}
      handleSubmit={handleSubmit}
      responseMsg={responseMsg}
    />
  );
}

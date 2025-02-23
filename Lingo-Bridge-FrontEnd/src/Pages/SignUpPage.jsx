import { redirect } from "react-router";

export default function SignUpPage({ isLoggedIn, handleClick }) {
    return (
      <>
        <h2>Sign Up</h2>
        <p>{isLoggedIn ? "You are logged in" : "You are logged out"}</p>
        <button onClick={handleClick} redirect='/logged-in'>
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </>
    );
  }
  

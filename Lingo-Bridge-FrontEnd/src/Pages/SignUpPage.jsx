import { redirect } from "react-router";
import SignUpForm from "../components/SignUpForm";

export default function SignUpPage({ isLoggedIn, h2ndleClick }) {
    return (
      <>
        <h2>Sign Up</h2>
        <SignUpForm />

        {/* <h2>this is just a place holder till we implement backend and tokens</h2>
        <p>{isLoggedIn ? "You are logged in" : "You are logged out"}</p>
        <button onClick={h2ndleClick} redirect='/logged-in'>
          {isLoggedIn ? "Log Out" : "Log In"}
        </button> */}
      </>
    );
  }
  

import { useNavigate } from "react-router";
import LoggedInHome from "./LoggedInHome";

export default function SignInPage({ isLoggedIn, handleClick }) {
    const navigate = useNavigate();

    const handleSignIn = () => {
        handleClick();
        navigate("/logged-in")
    }

    return (
      <>
        <h1>{isLoggedIn ? "Welcome Back!" : "Please Sign In"}</h1>
        <h4>Username</h4>
        <h4>Password</h4>
        <button onClick={handleSignIn}>Click here to sign in</button>
      </>
    );
  }
  
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserTokenContext from "../contexts/TokenContext";

export default function FancyButtons() {
  const navigate = useNavigate()
  const { clearUserToken } = useContext(UserTokenContext)

  const handleLogout = () => {
    clearUserToken();
    sessionStorage.removeItem("userToken");
    navigate("/");
  };

  return (
  
        <div className="fancy-button-holder">
          <button className="fancy-button" onClick={() => navigate("/wordsearch")}>
            {/* <img src={FancySearchButton} alt="Search" /> */}
            <p>Word Search</p>
          </button>

          {/* <button className="fancyButton" onClick={() => ("Quiz")}>
          <img src={quiz_button_better} alt="Quiz" />
          <p>Quiz</p>
          </button> */}
      
          <button className="fancy-button" onClick={() => navigate("/profile")}>
           {/* <img src={profile2} alt="profile" /> */}
            <p>Profile</p>
          </button>
      
          <button className="fancy-button" onClick={() => navigate("/signedinhome")}>
          {/* <img src={quiz_button_better} alt="Quiz" /> */}
          Word of the Day     
          </button>

          <button className="fancy-button" onClick={ handleLogout } style={{background:"#1E6D89", border:"2px, solid, black", color:"white", marginBottom:"10px"}}>
           Sign Out
          </button>

        </div>
    
  );
}
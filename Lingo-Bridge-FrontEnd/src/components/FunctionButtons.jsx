import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserTokenContext from "../contexts/TokenContext";

export default function FancyButtons() {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname
  const { clearUserToken } = useContext(UserTokenContext)

  
  return (
  
        <div className="fancy-button-holder">
          
          {currentPath !== "/signedinhome" && <button className="fancy-button" onClick={() => navigate("/signedinhome")}>
          {/* <img src={quiz_button_better} alt="Quiz" /> */}
          Word of the Day     
          </button>}
          
          {currentPath !== "/genzlist" && <button className="fancy-button" onClick={() => navigate("/genzlist")} style={{background:"#1E6D89", border:"2px, solid, black", color:"white", marginBottom:"10px"}}>
           Gen Z List
          </button>}
          
          {currentPath !== "/wordsearch" && <button className="fancy-button" onClick={() => navigate("/wordsearch")}>
            {/* <img src={FancySearchButton} alt="Search" /> */}
            <p>Urban Search</p>
          </button>}
      
          {currentPath !== "/profile" && <button className="fancy-button" onClick={() => navigate("/profile")}>
           {/* <img src={profile2} alt="profile" /> */}
            <p>Profile</p>
          </button>}
                
          {/* <button className="fancyButton" onClick={() => ("Quiz")}>
          <img src={quiz_button_better} alt="Quiz" />
          <p>Quiz</p>
          </button> */}
       
        </div>
    
  );
}


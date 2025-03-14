import React from "react";
import { useNavigate } from "react-router-dom";
import FancySearchButton from '../assets/FancySearchButton.png';
import profile2 from '../assets/profile2.png';

export default function FancyButtons() {
  const navigate = useNavigate()
  

  return (
    <div className="fancy-main-div">
      <h2>what's your JAM?</h2>
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
          Menu      
          </button>
        </div>
    </div>
  );
}
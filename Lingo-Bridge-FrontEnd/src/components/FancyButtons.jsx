import React from "react";
import { useNavigate } from "react-router-dom";
import FancySearchButton from '../assets/FancySearchButton.png';
import quiz_button_better from '../assets/quiz_button_better.png';

export default function FancyButtons() {
  const navigate = useNavigate()
  

  return (
    <div className="buttonHolder">
      <button className="fancyButton" onClick={() => navigate("/wordsearch")}>
        <img src={FancySearchButton} alt="Search" />
        <p>Word Search</p>
      </button>

      {/* <button className="fancyButton" onClick={() => ("Quiz")}>
        <img src={quiz_button_better} alt="Quiz" />
        <p>Quiz</p>
      </button> */}
      
      <button className="fancyButton" onClick={() => navigate("/profile")}>
        {/* <img src={profile_button_better} alt="Quiz" /> */}
        <p>Profile</p>      
        </button>
      
      <button className="fancyButton" onClick={() => navigate("/signedinhome")}>
        {/* <img src={quiz_button_better} alt="Quiz" /> */}
        <p>Menu</p>      
        </button>
     
    </div>
  );
}
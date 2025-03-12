import React from "react";
import FancySearchButton from '../assets/FancySearchButton.png';
import quiz_button_better from '../assets/quiz_button_better.png';

export default function FancyButtons({ onButtonClick }) {
  return (
    <div className="buttonHolder">
      <button className="fancyButton" onClick={() => onButtonClick("Search")}>
        <img src={FancySearchButton} alt="Search" />
        <p>Word Search</p>
      </button>

      <button className="fancyButton" onClick={() => onButtonClick("Quiz")}>
        <img src={quiz_button_better} alt="Quiz" />
        <p>Quiz</p>
      </button>
      
      <button className="fancyButton" onClick={() => onButtonClick("Home")}>
        {/* <img src={quiz_button_better} alt="Quiz" /> */}
        <p>Return</p>      
        </button>
     
    </div>
  );
}
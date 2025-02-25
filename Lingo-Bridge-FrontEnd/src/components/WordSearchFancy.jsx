import React from "react";
import FancySearchButton from '../assets/FancySearchButton.png'

export default function WordSearchFancy() {

    return (
        <button className="fancySearchButton" style={{ width: '24%'}}>
            <img src={FancySearchButton} alt="Search" style={{ width: '45%', height: '45%'}}></img>
            <p>word Search</p>
        </button>
        
    )
}
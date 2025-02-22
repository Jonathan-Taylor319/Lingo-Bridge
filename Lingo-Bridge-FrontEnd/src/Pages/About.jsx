import React from 'react';
import CodePlatoonLogo from '../assets/CodePlatoonLogo.png'
import Family from '../assets/family.png'

export default function About() {
    return (
        <div className="aboutdiv">
            <h2>About Lingo Bridge</h2>
            <p>
                Lingo Bridge helps translate modern slang for older generations, making communication across ages easier and 
                more fun! As I hope to grow this app maybe we can incorporate Emoji's, Quizes, etc..
            </p>
            <h2>About the Creator of Lingo Bridge</h2>
        
            <img src={Family} className='familyPhoto'/>
            <p>
                Hi, I'm Jonathan, a student at <a href="https://www.codeplatoon.org/" target="_blank" rel="noopener noreferrer">  
                <img src={CodePlatoonLogo} alt="Code Platoon Logo" className="CPLogo" /> Code Platoon </a>.  
                I hope you enjoy this simple web app! The idea for Lingo Bridge came from spending time with my kids and fiancée, 
                joking about the slang younger kids use. My fiancée was completely lost in the sauce, and we'd tease her about it 
                for a good laugh. That's when I realized—why not create something fun and helpful to bridge the gap? This is my first 
                personal project, and I'm excited to keep improving it! 
            </p> 
        </div>
    );
}

// notes for me - 
// the target='_blank' opens the link in a new tab
// the rel='noopener noreferrer improtes security preventing new tab from acesssing referring page
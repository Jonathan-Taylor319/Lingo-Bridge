import React from 'react';
import CodePlatoonLogo from '../assets/CodePlatoonLogo.png';
import Family from '../assets/family.png';

export default function About() {
    return (
        <div className="aboutdiv">
            <h2>About Lingo Bridge</h2>

            <h4>What is Lingo Bridge?</h4>
            <p>
                Lingo Bridge is a fun and interactive web app designed to help older generations understand modern slang. 
                Whether it's internet phrases, text abbreviations, or emoji meanings, this app bridges the communication 
                gap across generations, making conversations more engaging and enjoyable. In the future, I plan to add more 
                features like quizzes, emoji translations, and AI-powered slang suggestions to keep up with ever-evolving trends.
            </p>

            <h4>Why I Created It</h4>
            <p>
                Lingo Bridge started as my end-of-bootcamp project, but it quickly became more than just a coding exercise. 
                It was an opportunity to push myself beyond what I was taught, exploring new ideas and features that make 
                the app truly useful. My goal is to keep improving Lingo Bridge by incorporating user feedback and adding 
                fun, interactive learning experiences.
            </p>
            
            <h4>Meet the Creator</h4>
            <img src={Family} className="familyPhoto" alt="Jonathan and his family" />
            <p>
                Hi, I'm Jonathan, a developer and proud graduate of  
                <a href="https://www.codeplatoon.org/" target="_blank" rel="noopener noreferrer">  
                    <img src={CodePlatoonLogo} alt="Code Platoon Logo" className="CPLogo" /> Code Platoon
                </a>.  
                The idea for Lingo Bridge came from joking around with my kids and fiancée about modern slang. My fiancée 
                was often "lost in the sauce" when we threw out new phrases, and we'd all get a good laugh from it. That's 
                when it hit me—why not create an app that makes learning slang fun and accessible for everyone?  

                This is my first personal project, and I'm excited to see how it evolves. I hope you enjoy using Lingo Bridge 
                as much as Iive enjoyed building it!
            </p> 
        </div>
    );
}


// notes for me - 
// the target='_blank' opens the link in a new tab
// the rel='noopener noreferrer improtes security preventing new tab from acesssing referring page
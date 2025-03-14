import React from 'react';
import SignInUpButtons from '../components/SignInUpButtons';
import old_young from '../assets/old_young.jpg'
import Grandma from '../assets/Grandma.jpg'

export default function Home() {
    return (
        <>
            < SignInUpButtons />
            <div className="home-container">
            <h2>Please Log in or Sign-Up</h2>
            <h2 style={{ textAlign:"center"}}>Get in here and get the ☕️ TEA!</h2>
                <div className="home-image-container">
                    <img src={Grandma} alt="Image" className="image-right" />
                    <img src={old_young} alt="Image" className="image-left" />
                </div>
            </div>

        </>
    );
}

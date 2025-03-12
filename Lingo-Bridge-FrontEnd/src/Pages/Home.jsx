import React from 'react';
import old_young from '../assets/old_young.jpg'
import Grandma from '../assets/Grandma.jpg'
import confused from '../assets/confused_Guy.png'


export default function Home() {
    return (
        <>
            <h2>Please Log in or Sign-Up</h2>
            <div className="image-container">
                <img src={old_young} alt="Image" className="image-left" />
                <img src={Grandma} alt="Image" className="image-right" />
                <img src={confused} alt="Image" className="image-center" />
            <h2 style={{ textAlign:"center", marginTop: "600px"}}>Get in here and get the ☕️ TEA!</h2>
            </div>

        </>
    );
}

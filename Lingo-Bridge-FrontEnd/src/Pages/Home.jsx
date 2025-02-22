import React from 'react';
import myLogo from '../assets/myLogo.jpg';


export default function Home() {
    return (
        <div>
            <h2>Please Log in or Sign-Up</h2>
            <img className="logo" src={myLogo} alt="Lingo Bridge Logo" />
        </div>
    );
}

import React from 'react';
import myLogo from '../assets/myLogo.jpg';


export default function Home() {
    return (
        <div className="page-container">
            <img className="logo" src={myLogo} alt="Lingo Bridge Logo" />
            <h1 className="top-header">Bridging the Gap in Lingo</h1>
        </div>
    );
}

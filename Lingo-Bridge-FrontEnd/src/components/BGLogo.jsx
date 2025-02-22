import React from 'react';
import './BGLogo.css';
import myLogo from '../assets/myLogo.png';

export default function BgLogo(){
  return (
    <div className="bg-logo">
      <img src={myLogo} alt="Logo" />
    </div>
  );
};

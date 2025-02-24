import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import TopAppBar from './components/TopAppBar';
import Home from './pages/Home';
import About from './pages/About';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import LoggedInHome from './pages/LoggedInHome';
import Profile from './pages/Profile';
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Managing the login state

  const handleClick = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  return (
    <BrowserRouter>
      <TopAppBar isLoggedIn={isLoggedIn} handleClick={handleClick} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUpPage isLoggedIn={isLoggedIn} handleClick={handleClick} />} />
          <Route path="/sign-in" element={<SignInPage isLoggedIn={isLoggedIn} handleClick={handleClick} />} />
          <Route path="/logged-in" element={<LoggedInHome />} />
          <Route path='profile' element={isLoggedIn && < Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

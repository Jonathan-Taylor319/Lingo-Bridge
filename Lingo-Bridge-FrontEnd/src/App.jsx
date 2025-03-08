import './App.css';
import React, { useState } from 'react';
import { UserTokenProvider } from './contexts/TokenContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopAppBar from './components/TopAppBar';
import Home from './Pages/Home';
import About from './Pages/About';
import SignUpPage from './Pages/SignUpPage'
import SignInPage from './Pages/SignInPage';
import { login } from '../api/api';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn); // Example of toggling the login state
  };

  return (
      <UserTokenProvider>
        <BrowserRouter>
          <TopAppBar isLoggedIn={isLoggedIn} handleClick={handleClick} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/sign-in" element={<SignInPage onSubmit={ login } />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserTokenProvider>
  );
}

export default App;
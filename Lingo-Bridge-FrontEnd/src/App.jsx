import './App.css';
import React, { useEffect, useState } from 'react';
import { UserTokenProvider } from './contexts/TokenContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopAppBar from './components/TopAppBar';
import Home from './Pages/Home';
import About from './Pages/About';
import SignUpPage from './Pages/SignUpPage'
import SignInPage from './Pages/SignInPage';
import SignedInHome from './Pages/SignedInHome';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = sessionStorage.getItem("userToken")
    //change the state dependent if we have a token
    setIsLoggedIn(!!token)
  },[])

  return (
      <UserTokenProvider>
        <BrowserRouter>
          <TopAppBar isLoggedIn={isLoggedIn} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/signedinhome" element={<SignedInHome />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserTokenProvider>
  );
}

export default App;
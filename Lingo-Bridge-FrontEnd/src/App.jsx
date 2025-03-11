import './App.css';
import React, { useEffect, useState } from 'react';
import { UserTokenProvider } from './contexts/TokenContext';
import { UserInfoProvider } from './contexts/UserInfoContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './guards/ProtectedRoute';
import TopAppBar from './components/TopAppBar';
import Home from './Pages/Home';
import About from './Pages/About';
import SignUpPage from './Pages/SignUpPage'
import SignInPage from './Pages/SignInPage';
import SignedInHome from './Pages/SignedInHome';
import ProfilePage from './Pages/ProfilePage';

function App() {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)

  useEffect(() => {
    const token = sessionStorage.getItem("userToken")
    //change the state dependent if we have a token
    setIsAuthenticated(!!token)
  },[])

  return (
      <UserTokenProvider>
        <UserInfoProvider>
          <BrowserRouter>
            <TopAppBar isAuthenticated={ isAuthenticated } />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/signedinhome" element={ <ProtectedRoute isAuthenticated={ isAuthenticated }> <SignedInHome /></ProtectedRoute> } />
                <Route path="/profilepage" element={ <ProtectedRoute isAuthenticated={ isAuthenticated }> <ProfilePage /></ProtectedRoute> } />
              </Routes>
            </div>
          </BrowserRouter>
        </UserInfoProvider>
      </UserTokenProvider>
  );
}

export default App;
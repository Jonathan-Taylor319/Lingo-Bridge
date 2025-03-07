import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TopAppBar from './components/TopAppBar';
import Home from './pages/Home';
import About from './pages/About';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import LoggedInHome from './pages/LoggedInHome';
import Profile from './pages/Profile';
import UserTokenContext from './contexts/UserTokenContext'


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // Managing the login state
  const [formData, setFormData] = useState({username: '', password:''});
  const [userToken, setUserToken] = useState(null)

  const handleToken = (token) => {
    setFormData({ username:'', password:''})
    setUserToken(token)
  }

  const handleInputChange = (e) => {
    const {name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [email]: value,
      [password]: value,
    });
  }

  return (
    <UserTokenContext.Provider value={ userToken }>
      <BrowserRouter>
        <TopAppBar isLoggedIn={isLoggedIn} handleClick={handleClick} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/sign-up" element={<SignUpPage handleInputChange={handleInputChange} formData={formData} />} />
              <Route path="/sign-in" element={<SignInPage handleInputChange={handleInputChange} formData={formData} handleToken={handleToken} />} />
              <Route path="/loggedinhome" element={<LoggedInHome />} />
              <Route path="/profile" element={isLoggedIn && < Profile />} />
              {/* <Route path='/logout' element={<Logout userToken={userToken} setUserToken={setUserToken}/>} /> */}
            </Routes>
          </div>
      </BrowserRouter>
    </UserTokenContext.Provider>
  );
}

export default App;

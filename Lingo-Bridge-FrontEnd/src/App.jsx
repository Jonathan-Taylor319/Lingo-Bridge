import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import TopAppBar from './components/TopAppBar';
import Home from './pages/Home';
import About from './pages/About'
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage'

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
      <TopAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/sign-in' element={<SignInPage />} />
      </Routes>
      
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

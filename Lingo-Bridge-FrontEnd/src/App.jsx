import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import TopAppBar from './components/TopAppBar';
import Home from './pages/Home';
import About from './pages/About'
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
      </Routes>
      
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
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
      <TopAppBar />
      <div className="main-content">
        {/* <Home /> */}
        <About />
      </div>
    </ThemeProvider>
  );
}

export default App;

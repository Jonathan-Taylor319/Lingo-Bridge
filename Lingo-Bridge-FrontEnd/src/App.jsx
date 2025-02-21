import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // Ensures consistent global styles
import theme from './theme/theme'; // Import the theme
import TopAppBar from './components/TopAppBar';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Resets styles to match Material-UI defaults */}
      <TopAppBar />
      <div className="main-content">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;

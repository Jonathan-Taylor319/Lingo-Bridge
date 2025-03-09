import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu'; 
import MenuItem from '@mui/material/MenuItem';  

export default function TopAppBar({ isLoggedIn, handleClick }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClick();
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1  }}>
      <AppBar position="absolute"   sx={{ 
          height: '50px', // Reduce height of AppBar
        }}>
        <Toolbar>
          <MenuIcon onClick={handleMenuOpen} />
          
          <Menu
            anchorEl={anchorEl}  
            open={Boolean(anchorEl)}  
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                backgroundColor: "#333",  // Set background color for the Menu
                borderRadius: 2,  // Optional: rounded corners
              },
            }}
          >
            <MenuItem
              onClick={handleMenuClose}
              sx={{
                display: 'flex',
                justifyContent: 'center',  // Center the item horizontally
                textAlign: 'center',  // Center the text
              }}
            >
              {isLoggedIn && <Link to='/logged-in' style={{ color: "white", textDecoration: 'none' }}>Home</Link>}
              {!isLoggedIn && <Link to='/' style={{ color: "white", textDecoration: 'none' }}>Home</Link>}
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              sx={{
                display: 'flex',
                justifyContent: 'center',  // Center the item horizontally
                textAlign: 'center',  // Center the text
              }}
            >
              <Link to="/about" style={{ color: "white", textDecoration: 'none' }}>About</Link>
            </MenuItem>
          </Menu>

          <Box sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <Typography variant="h6" component="div">
              - We Bridge the Gap of Generational Lingo -
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          {isLoggedIn && <AccountCircle fontSize='large' edge="start"/>}
          {!isLoggedIn && <Button color="inherit" sx={{ mr: 1 }} component={Link} to="/sign-in"> Sign In </Button>}
          {!isLoggedIn && <Button color="inherit" component={Link} to="/sign-up"> Sign Up </Button>}
          {isLoggedIn && <Button onClick={handleLogout} color="inherit">Sign Out</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

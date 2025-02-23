import React from 'react';
import { Link, useNavigate } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';


export default function ButtonAppBar({ isLoggedIn, handleClick }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    handleClick();
    navigate("/");
  };
 
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {isLoggedIn && <AccountCircle fontSize='large' edge="start"/> }
           
          <Box sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <Typography variant="h6" component="div">
              - We Bridge the Gap of Generational Lingo -
            </Typography>
          </Box>

          
          <Box sx={{ flexGrow: 1 }} />
          {!isLoggedIn && <Button color="inherit" sx={{ mr: 1 }} component={Link} to="/sign-in"> Login </Button> }
          {!isLoggedIn && <Button color="inherit" component={Link} to="/sign-up"> Sign-Up </Button> }
          {isLoggedIn && <Button onClick={handleLogout} color="inherit">Sign Out</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

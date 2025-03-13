import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';  
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UserTokenContext from '../contexts/TokenContext';
import { UserInfoContext } from '../contexts/UserInfoContext';

export default function TopAppBar() {
  const navigate = useNavigate();
 
  const { userName, avatarUrl } = useContext(UserInfoContext);
  const { isAuthenticated, clearUserToken } = useContext(UserTokenContext);

  const handleLogout = () => {
    clearUserToken();
    sessionStorage.removeItem("userToken");
    navigate("/");
  };

  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed"
        sx={{ 
          background: "#2a7f62",
          height: "55px" ,
          backdropFilter: "blur(10px)" 
        }}
      >
        <Toolbar>
        {isAuthenticated && (
          <>
            {/* Use avatarUrl if available */}
            <img 
              src={avatarUrl} 
              alt="User Avatar" 
              style={{ width: 40, height: 40, borderRadius: '50%', marginRight: '10px', paddingLeft: '25px'}} 
            />
          </>
        )}
            <Typography variant="subtitle1" sx={{ color: 'white', paddingLeft:'10px'}}>
              {userName}
            </Typography>

          <Box sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)", textAlign: "center" }}>
            <Typography 
              variant="h6" 
              sx={{ fontSize: { xs: "14px", sm: "18px" }, color: "white" }}
            >
              - We Bridge the Gap of Generational Lingo -
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {!isAuthenticated && location.pathname !== "/sign-in" && (
            <Button color="inherit" sx={{ mr: 1 }} component={Link} to="/sign-in">
              Sign In
            </Button>
          )}
          {!isAuthenticated && location.pathname !== "/sign-up" && (
            <Button color="inherit" component={Link} to="/sign-up">
              Sign Up
            </Button>
          )}
          {isAuthenticated && (
            <Button onClick={ handleLogout } color="inherit">
              Sign Out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

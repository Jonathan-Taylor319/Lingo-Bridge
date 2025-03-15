import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';  
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UserTokenContext from '../contexts/TokenContext';
import { UserInfoContext } from '../contexts/UserInfoContext';
import FancyButtons from './FunctionButtons';
import SignInUpButtons from './SignInUpButtons';

export default function TopAppBar() {
  const navigate = useNavigate();

  const { userName, avatarUrl } = useContext(UserInfoContext);
  const { isAuthenticated, clearUserToken } = useContext(UserTokenContext);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed"
        sx={{ 
          background: "#287A8D",
          height: "55px" ,
          backdropFilter: "blur(10px)" 
        }}
        >
        <Toolbar>
        {isAuthenticated && <button style={{marginBottom:"20px"}}onClick={() => navigate("/about")}>About</button>}
        {isAuthenticated && (
          <>
            {/* Use avatarUrl if available */}
            <img 
              src={avatarUrl} 
              alt="User Avatar" 
              style={{ width: "60px", height: 100, borderRadius: '50%', marginRight: '10px',marginBottom:"10px", paddingLeft: '25px'}} 
              />
          </>
        )}
            <Typography variant="subtitle1" sx={{ color: 'white', paddingLeft:'10px', marginBottom:"10px", fontSize:"30px"}}>
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
          {!isAuthenticated && < SignInUpButtons />}

          <Box sx={{ flexGrow: 1 }} />
          {isAuthenticated &&  <FancyButtons />
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

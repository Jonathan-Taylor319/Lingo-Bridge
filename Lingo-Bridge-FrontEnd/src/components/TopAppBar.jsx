import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';  
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu'; 
import MenuItem from '@mui/material/MenuItem';
import UserTokenContext from '../contexts/TokenContext'

export default function TopAppBar({}) {
  //imported context 
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const { isAuthenticated, clearUserToken } = useContext(UserTokenContext)

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    clearUserToken()
    sessionStorage.removeItem("userToken")
    navigate("/")
  }

  const location = useLocation()
  
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
            <MenuItem onClick={ handleMenuClose }component={Link} to='/about' sx={{display: 'flex', justifyContent: 'center', textAlign: 'center', color:"white"}}>About
            </MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', textAlign: 'center', color:"white"}}>
              {!isAuthenticated && <Link to='/' style={{ color: "white", textDecoration: 'none' }}>Home</Link>}
              {isAuthenticated && <Link to='/signedinhome' style={{ color: "white", textDecoration: 'none' }}>Home</Link>}
            </MenuItem>
            {isAuthenticated && ( <MenuItem onClick={ handleMenuClose }component={Link} to='/profilepage' sx={{display: 'flex', justifyContent: 'center', textAlign: 'center', color:"white"}}>Profile
            </MenuItem>)}
        
          </Menu>

          <Box sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <Typography variant="h6" component="div">
              - We Bridge the Gap of Generational Lingo -
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          {isAuthenticated && <AccountCircle fontSize='large' edge="start"/>}
          {!isAuthenticated && location.pathname !== "/sign-in" && <Button color="inherit" sx={{ mr: 1 }} component={Link} to="/sign-in"> Sign In </Button>}
          {!isAuthenticated && location.pathname !== "/sign-up" && <Button color="inherit" component={Link} to="/sign-up"> Sign Up </Button>}
          {isAuthenticated && <Button onClick={handleLogout} color="inherit">Sign Out</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

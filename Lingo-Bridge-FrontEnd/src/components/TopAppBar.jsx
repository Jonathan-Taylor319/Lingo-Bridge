import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';  
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu'; 
import MenuItem from '@mui/material/MenuItem';
import UserTokenContext from '../contexts/TokenContext';
import { UserInfoContext } from '../contexts/UserInfoContext';

export default function TopAppBar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const { userName, avatarUrl } = useContext(UserInfoContext);
  const { isAuthenticated, clearUserToken } = useContext(UserTokenContext);

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    clearUserToken();
    sessionStorage.removeItem("userToken");
    navigate("/");
  };

  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="absolute"
        sx={{ 
          background: "rgba(0, 0, 0, 0.7)", 
          minHeight: { xs: '50px', sm: '60px' }, 
          backdropFilter: "blur(10px)" 
        }}
      >
        <Toolbar>
          <MenuIcon onClick={handleMenuOpen} sx={{ cursor: "pointer", color: "white" }} />

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: { backgroundColor: "#222", color: "white", borderRadius: 2 }
            }}
          >
            <MenuItem onClick={handleMenuClose} component={Link} to='/about'>About</MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to={isAuthenticated ? '/signedinhome' : '/'} style={{ color: "white", textDecoration: 'none' }}>
                Home
              </Link>
            </MenuItem>
            {isAuthenticated && (
              <MenuItem onClick={handleMenuClose} component={Link} to='/profilepage'>
                Profile
              </MenuItem>
            )}
          </Menu>

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
            <Button onClick={handleLogout} color="inherit">
              Sign Out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

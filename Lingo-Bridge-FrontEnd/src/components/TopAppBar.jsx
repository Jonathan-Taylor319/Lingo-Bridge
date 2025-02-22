import * as React from 'react';
import { Link } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* Menu Icon */}
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          {/* Centered Tagline */}
          <Box sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <Typography variant="h6" component="div">
              - We Bridge the Gap of Generational Lingo -
            </Typography>
          </Box>

          {/* Push Items to the Right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Profile Icon */}
          <AccountCircle sx={{ mr: 2 }} />

          {/* Login & Sign-Up Buttons */}
          <Button color="inherit" sx={{ mr: 1 }} component={Link} to="/sign-in">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/sign-up">
            Sign-Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

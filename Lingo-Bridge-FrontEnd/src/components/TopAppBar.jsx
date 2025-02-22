import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

//need to make a set state for logged in sowhen logged in the account circle will show a profile pic and if not it will hide
// need to decide if i want a menu icon to navigate or what....might just use that

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           - We Bridge the Gap of Generational Lingo -
          </Typography>
          <AccountCircle sx={{ mr:2 }} />

          <Button color="inherit" sx={{ mr:1 }}>Login</Button>
          <Button color="inherit">Sign-Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

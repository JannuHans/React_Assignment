import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/logo.png';

const Header = () => {
  return (
    <AppBar position="fixed" elevation={1}>
      <Toolbar sx={{ px: { xs: 2, md: 4 } }}>
        <Box
          component={Link}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
            mr: 4,
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease',
            },
          }}
        >
          <Box
            component="img"
            src={reactLogo}
            alt="Logo"
            sx={{
              height: 40,
              mr: 2,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            Your Brand
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/"
            color="inherit"
            sx={{
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                width: 0,
                height: '2px',
                backgroundColor: 'white',
                transition: 'width 0.3s ease, left 0.3s ease',
              },
              '&:hover::after': {
                width: '100%',
                left: 0,
              },
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            color="inherit"
            sx={{
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                width: 0,
                height: '2px',
                backgroundColor: 'white',
                transition: 'width 0.3s ease, left 0.3s ease',
              },
              '&:hover::after': {
                width: '100%',
                left: 0,
              },
            }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/contact"
            color="inherit"
            sx={{
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                width: 0,
                height: '2px',
                backgroundColor: 'white',
                transition: 'width 0.3s ease, left 0.3s ease',
              },
              '&:hover::after': {
                width: '100%',
                left: 0,
              },
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 
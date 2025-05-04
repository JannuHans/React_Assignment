import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a237e',
        color: 'white',
        py: { xs: 4, md: 6 },
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: 'white' }}>
              Assignment Details
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>
              React.js Landing Page Implementation
              <br />
              Created with Vite + React
              <br />
              Using Material-UI for styling
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <IconButton
                size="small"
                sx={{
                  color: 'white',
                  '&:hover': { transform: 'translateY(-2px)', color: 'rgba(255,255,255,0.8)' },
                }}
              >
                <Facebook fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: 'white',
                  '&:hover': { transform: 'translateY(-2px)', color: 'rgba(255,255,255,0.8)' },
                }}
              >
                <Twitter fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: 'white',
                  '&:hover': { transform: 'translateY(-2px)', color: 'rgba(255,255,255,0.8)' },
                }}
              >
                <Instagram fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: 'white',
                  '&:hover': { transform: 'translateY(-2px)', color: 'rgba(255,255,255,0.8)' },
                }}
              >
                <LinkedIn fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: 'white' }}>
              Navigation
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Home', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'white',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: 'white' }}>
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email fontSize="small" sx={{ color: 'rgba(255,255,255,0.7)' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  student@example.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone fontSize="small" sx={{ color: 'rgba(255,255,255,0.7)' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  +1 234 567 890
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn fontSize="small" sx={{ color: 'rgba(255,255,255,0.7)' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  University Campus
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Features Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: 'white' }}>
              Features Implemented
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                • Blue and white theme
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                • Multiple images
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                • Embedded videos
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                • Card components
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: '1px solid',
            borderColor: 'rgba(255,255,255,0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            © {new Date().getFullYear()} React.js Assignment. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 
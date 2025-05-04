import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import Card from '../components/Card';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" sx={{ position: 'relative', zIndex: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 800,
                  mb: 2,
                  lineHeight: 1.2,
                  animation: 'fadeInUp 0.8s ease-out',
                }}
              >
                React.js Assignment Showcase
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  animation: 'fadeInUp 0.8s ease-out 0.2s',
                  animationFillMode: 'both',
                }}
              >
                A beautiful landing page demonstrating React.js implementation with modern UI/UX principles
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  animation: 'fadeInUp 0.8s ease-out 0.4s',
                  animationFillMode: 'both',
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    background: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.9)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  View Features
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.1)',
                      borderColor: 'white',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  animation: 'fadeInRight 0.8s ease-out 0.6s',
                  animationFillMode: 'both',
                }}
              >
                <Box
                  component="img"
                  src="/hero-image.png"
                  alt="React.js Showcase"
                  sx={{
                    width: '100%',
                    maxWidth: 500,
                    borderRadius: 2,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    transform: 'perspective(1000px) rotateY(-5deg)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateY(0deg)',
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
              animation: 'bounce 2s infinite',
              cursor: 'pointer',
            }}
          >
            <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
          </Box>
        </Container>
      </Box>

      {/* Video Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: 'stretch',
          }}
        >
          {/* Video Box */}
          <Box
            sx={{
              flex: '0 0 60%',
              minHeight: 400,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3,
              backgroundColor: '#000',
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="React.js Implementation Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>

          {/* Description Box */}
          <Box
            sx={{
              flex: '0 0 40%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              pl: { md: 4 },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
              }}
            >
              Assignment Features
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: 'text.secondary',
              }}
            >
              This project demonstrates the implementation of a React.js landing page with:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                Blue and white color theme
              </Typography>
              <Typography component="li" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                Multiple images and embedded videos
              </Typography>
              <Typography component="li" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                Card components showcasing features
              </Typography>
              <Typography component="li" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                Responsive design for all screen sizes
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Features Section */}
        <Typography
          variant="h2"
          align="center"
          sx={{
            mt: 12,
            mb: 6,
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
          }}
        >
          Key Components
        </Typography>
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 4,
            pb: 2,
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          <Box sx={{ minWidth: 280, flexShrink: 0, height: 400 }}>
            <Card
              title="React.js Implementation"
              description="Built using Vite for fast development and optimized production builds. Demonstrates modern React.js practices and component-based architecture."
            />
          </Box>
          <Box sx={{ minWidth: 280, flexShrink: 0, height: 400 }}>
            <Card
              title="Responsive Design"
              description="Fully responsive layout that adapts to all screen sizes. Uses Material-UI's responsive utilities and custom breakpoints."
            />
          </Box>
          <Box sx={{ minWidth: 280, flexShrink: 0, height: 400 }}>
            <Card
              title="Modern UI/UX"
              description="Implements modern design principles with smooth animations, hover effects, and intuitive navigation."
            />
          </Box>
          <Box sx={{ minWidth: 280, flexShrink: 0, height: 400 }}>
            <Card
              title="Component Structure"
              description="Well-organized component structure with Header, Footer, and Card components demonstrating reusability."
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 
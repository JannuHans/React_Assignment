import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            width: '100%',
            backgroundColor: 'background.default',
          }}
        >
          <Header />
          <Box 
            component="main" 
            sx={{ 
              flexGrow: 1,
              width: '100%',
              pt: { xs: 8, md: 10 }, // Add padding to account for fixed header
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;

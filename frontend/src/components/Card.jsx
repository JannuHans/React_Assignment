import React from 'react';
import { Card as MuiCard, CardContent, Typography, Button, Box } from '@mui/material';

const Card = ({ title, description }) => {
  return (
    <MuiCard
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
        borderRadius: 3,
        overflow: 'hidden',
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
          '& .card-icon': {
            transform: 'scale(1.1)',
          },
        },
      }}
    >
      <Box
        className="card-icon"
        sx={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          backgroundColor: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '24px auto 16px',
          transition: 'transform 0.3s ease',
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        {title.charAt(0)}
      </Box>
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          p: 3,
          textAlign: 'center',
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: 'text.primary',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 3,
            flexGrow: 1,
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            alignSelf: 'center',
            textTransform: 'none',
            px: 4,
            py: 1,
            borderRadius: 2,
            background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
            '&:hover': {
              background: 'linear-gradient(45deg, #0d47a1 30%, #1a237e 90%)',
            },
          }}
        >
          Learn More
        </Button>
      </CardContent>
    </MuiCard>
  );
};

export default Card; 
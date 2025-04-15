import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Developer Portal Dashboard
        </Typography>
        <Typography variant="body1">
          Welcome to your developer portal! This is where you'll find all your development resources and tools.
        </Typography>
      </Box>
    </Container>
  );
};

export default Dashboard; 
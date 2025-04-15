import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Showcase from './components/Showcase/Showcase';
import { router } from './router';

// Create a theme instance
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App: React.FC = () => {
  const [showShowcase, setShowShowcase] = useState(false);

  useEffect(() => {
    // Check if it's the first visit
    const hasSeenShowcase = localStorage.getItem('hasSeenShowcase');
    if (!hasSeenShowcase) {
      setShowShowcase(true);
    }
  }, []);

  const handleShowcaseComplete = () => {
    localStorage.setItem('hasSeenShowcase', 'true');
    setShowShowcase(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
      {showShowcase && <Showcase onComplete={handleShowcaseComplete} />}
    </ThemeProvider>
  );
};

export default App; 
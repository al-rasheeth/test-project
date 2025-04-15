import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Showcase from './components/Showcase/Showcase';
import Dashboard from './pages/Dashboard';

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
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add more routes as needed */}
        </Routes>
        {showShowcase && <Showcase onComplete={handleShowcaseComplete} />}
      </Router>
    </ThemeProvider>
  );
};

export default App; 
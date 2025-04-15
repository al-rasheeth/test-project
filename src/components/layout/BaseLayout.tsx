import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Showcase from '../Showcase/Showcase';
import { Box } from '@mui/material';

const BaseLayout: React.FC = () => {
  const [showShowcase, setShowShowcase] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if it's the first visit
    const hasSeenShowcase = localStorage.getItem('hasSeenShowcase');
    setShowShowcase(!hasSeenShowcase);
  }, []);

  const handleShowcaseComplete = () => {
    localStorage.setItem('hasSeenShowcase', 'true');
    setShowShowcase(false);
  };

  // Don't render anything until we've checked localStorage
  if (showShowcase === null) {
    return null;
  }

  if (showShowcase) {
    return <Showcase onComplete={handleShowcaseComplete} />;
  }

  return <Outlet />;
};

export default BaseLayout; 
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Showcase from '../Showcase/Showcase';

const BaseLayout: React.FC = () => {
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

  if (showShowcase) {
    return <Showcase onComplete={handleShowcaseComplete} />;
  }

  return <Outlet />;
};

export default BaseLayout; 
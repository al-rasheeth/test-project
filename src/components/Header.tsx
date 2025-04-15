import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const HeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#072447',
  padding: theme.spacing(2, 3),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #00d2ff, transparent)',
    animation: 'shine 3s infinite',
  },
}));

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  position: 'relative',
});

const DXLogo = styled(Box)(({ theme }) => ({
  fontFamily: 'Inter, sans-serif',
  fontWeight: 800,
  fontSize: '1.8rem',
  position: 'relative',
  padding: theme.spacing(0.5, 1),
  borderRadius: '8px',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, rgba(0, 210, 255, 0.1) 0%, rgba(58, 123, 213, 0.1) 100%)',
  backdropFilter: 'blur(5px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  
  '&::before': {
    content: '"DX"',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, #00d2ff, #3a7bd5, #00d2ff)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'gradientShift 3s ease infinite',
  },
  
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(0, 210, 255, 0.1) 0%, rgba(58, 123, 213, 0.1) 100%)',
    borderRadius: '8px',
    zIndex: -1,
    transition: 'all 0.3s ease',
    opacity: 0,
  },
  
  '&:hover::after': {
    opacity: 1,
    transform: 'scale(1.05)',
  },
  
  '@keyframes gradientShift': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
}));

const StyledMenuIcon = styled(MenuIcon)({
  color: 'white',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#00d2ff',
    transform: 'rotate(90deg)',
  },
});

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <LogoContainer>
        <DXLogo />
      </LogoContainer>
      <IconButton 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        sx={{ 
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <StyledMenuIcon />
      </IconButton>
    </HeaderContainer>
  );
};

export default Header; 
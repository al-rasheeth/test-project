import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #072447;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const DXLogo = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 1.8rem;
  position: relative;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  overflow: hidden;
  
  &::before {
    content: 'DX';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, 
      #00d2ff 0%, 
      #3a7bd5 25%, 
      #00d2ff 50%, 
      #3a7bd5 75%, 
      #00d2ff 100%
    );
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 3s ease infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, 
      rgba(0, 210, 255, 0.1) 0%, 
      rgba(58, 123, 213, 0.1) 100%
    );
    border-radius: 4px;
    z-index: -1;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scale(1.05);
  }
  
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  
  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease;
  }
  
  &:hover span {
    background-color: #00d2ff;
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <LogoContainer>
        <DXLogo>DX</DXLogo>
      </LogoContainer>
      <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerButton>
    </HeaderContainer>
  );
};

export default Header; 
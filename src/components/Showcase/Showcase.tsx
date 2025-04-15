import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { showcaseSteps } from './data';
import { ShowcaseStep } from './types';

const Showcase: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < showcaseSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      localStorage.setItem('hasSeenShowcase', 'true');
      navigate('/dashboard');
    }
  };

  const currentStepData: ShowcaseStep = showcaseSteps[currentStep];

  return (
    <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  background: currentStepData.gradient,
                  color: 'white',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ mb: 4 }}>
                    {currentStepData.icon}
                  </Box>
                  <Typography variant="h3" component="h1" gutterBottom>
                    {currentStepData.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {currentStepData.description}
                  </Typography>
                  <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {showcaseSteps.map((_, index) => (
                        <Box
                          key={index}
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            backgroundColor: index === currentStep ? 'white' : 'rgba(255, 255, 255, 0.5)',
                          }}
                        />
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{
                        backgroundColor: 'white',
                        color: currentStepData.color,
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        },
                      }}
                    >
                      {currentStep === showcaseSteps.length - 1 ? 'Get Started' : 'Next'}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </Grid>
        <Grid item xs={12} md={6}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component="img"
                src={currentStepData.illustration as string}
                alt={currentStepData.title}
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '60vh',
                  objectFit: 'contain',
                }}
              />
            </motion.div>
          </AnimatePresence>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Showcase; 
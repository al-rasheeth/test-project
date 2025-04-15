import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  Stepper,
  Step,
  StepLabel,
  useTheme,
} from '@mui/material';
import {
  ArrowForward as ArrowForwardIcon,
  Close as CloseIcon,
  Check as CheckIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface ShowcaseStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const showcaseSteps: ShowcaseStep[] = [
  {
    title: "Welcome to Dev Portal",
    description: "Your one-stop solution for managing and exploring developer resources. Let's get you started with a quick tour!",
    icon: "👋",
  },
  {
    title: "Powerful Documentation",
    description: "Access comprehensive documentation, code examples, and API references all in one place.",
    icon: "📚",
  },
  {
    title: "Interactive Playground",
    description: "Test APIs and experiment with code snippets in our interactive playground environment.",
    icon: "🎮",
  },
  {
    title: "Team Collaboration",
    description: "Share resources, collaborate on documentation, and manage team access effortlessly.",
    icon: "👥",
  },
];

interface ShowcaseProps {
  onComplete: () => void;
}

const Showcase: React.FC<ShowcaseProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep === showcaseSteps.length - 1) {
      onComplete();
      navigate('/dashboard'); // Navigate to your main dashboard
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        bgcolor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1300,
      }}
    >
      <Card
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        sx={{
          maxWidth: 500,
          width: '90%',
          position: 'relative',
          borderRadius: 2,
        }}
      >
        <IconButton
          onClick={onComplete}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>

        <CardContent>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  mb: 4,
                }}
              >
                <Typography variant="h1" sx={{ fontSize: '4rem' }}>
                  {showcaseSteps[currentStep].icon}
                </Typography>
                <Typography variant="h4" component="h2" align="center">
                  {showcaseSteps[currentStep].title}
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary">
                  {showcaseSteps[currentStep].description}
                </Typography>
              </Box>
            </motion.div>
          </AnimatePresence>

          <Stepper
            activeStep={currentStep}
            alternativeLabel
            sx={{ mb: 4 }}
          >
            {showcaseSteps.map((_, index) => (
              <Step key={index}>
                <StepLabel />
              </Step>
            ))}
          </Stepper>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              onClick={handleNext}
              endIcon={
                currentStep === showcaseSteps.length - 1 ? (
                  <CheckIcon />
                ) : (
                  <ArrowForwardIcon />
                )
              }
              size="large"
            >
              {currentStep === showcaseSteps.length - 1 ? 'Get Started' : 'Next'}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Showcase; 
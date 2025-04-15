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
  Paper,
  Grid,
  Fade,
  Zoom,
} from '@mui/material';
import {
  ArrowForward as ArrowForwardIcon,
  Close as CloseIcon,
  Check as CheckIcon,
  Code as CodeIcon,
  Book as BookIcon,
  PlayCircle as PlayIcon,
  Group as GroupIcon,
} from '@mui/icons-material';

interface ShowcaseStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  illustration: string;
  color: string;
}

const showcaseSteps: ShowcaseStep[] = [
  {
    title: "Welcome to Dev Portal",
    description: "Your one-stop solution for managing and exploring developer resources. Let's get you started with a quick tour!",
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    illustration: "https://illustrations.popsy.co/amber/developer-activity.svg",
    color: "#FF6B6B",
  },
  {
    title: "Powerful Documentation",
    description: "Access comprehensive documentation, code examples, and API references all in one place.",
    icon: <BookIcon sx={{ fontSize: 40 }} />,
    illustration: "https://illustrations.popsy.co/amber/documentation.svg",
    color: "#4ECDC4",
  },
  {
    title: "Interactive Playground",
    description: "Test APIs and experiment with code snippets in our interactive playground environment.",
    icon: <PlayIcon sx={{ fontSize: 40 }} />,
    illustration: "https://illustrations.popsy.co/amber/coding.svg",
    color: "#45B7D1",
  },
  {
    title: "Team Collaboration",
    description: "Share resources, collaborate on documentation, and manage team access effortlessly.",
    icon: <GroupIcon sx={{ fontSize: 40 }} />,
    illustration: "https://illustrations.popsy.co/amber/team-work.svg",
    color: "#96CEB4",
  },
];

interface ShowcaseProps {
  onComplete: () => void;
}

const Showcase: React.FC<ShowcaseProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const theme = useTheme();

  const handleNext = () => {
    if (currentStep === showcaseSteps.length - 1) {
      onComplete();
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        bgcolor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1300,
        overflow: 'hidden',
      }}
    >
      <Card
        component={motion.div}
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        sx={{
          maxWidth: 1000,
          width: '90%',
          height: '80vh',
          position: 'relative',
          borderRadius: 4,
          overflow: 'hidden',
          bgcolor: 'background.paper',
        }}
      >
        <IconButton
          onClick={onComplete}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            zIndex: 1,
          }}
        >
          <CloseIcon />
        </IconButton>

        <Grid container sx={{ height: '100%' }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              p: 4,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              component={motion.div}
              variants={itemVariants}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bgcolor: showcaseSteps[currentStep].color,
                opacity: 0.1,
                zIndex: 0,
              }}
            />
            
            <Box
              component={motion.div}
              variants={itemVariants}
              sx={{ position: 'relative', zIndex: 1 }}
            >
              <Box
                component={motion.div}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 4,
                  color: showcaseSteps[currentStep].color,
                }}
              >
                {showcaseSteps[currentStep].icon}
              </Box>

              <Typography
                component={motion.h2}
                variants={itemVariants}
                variant="h3"
                sx={{ mb: 2, fontWeight: 'bold' }}
              >
                {showcaseSteps[currentStep].title}
              </Typography>

              <Typography
                component={motion.p}
                variants={itemVariants}
                variant="body1"
                sx={{ mb: 4, color: 'text.secondary' }}
              >
                {showcaseSteps[currentStep].description}
              </Typography>

              <Stepper
                component={motion.div}
                variants={itemVariants}
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

              <Button
                component={motion.button}
                variants={itemVariants}
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
                sx={{
                  bgcolor: showcaseSteps[currentStep].color,
                  '&:hover': {
                    bgcolor: showcaseSteps[currentStep].color,
                    opacity: 0.9,
                  },
                }}
              >
                {currentStep === showcaseSteps.length - 1 ? 'Get Started' : 'Next'}
              </Button>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 4,
              bgcolor: 'background.default',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentStep}
                src={showcaseSteps[currentStep].illustration}
                alt={showcaseSteps[currentStep].title}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
            </AnimatePresence>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Showcase; 
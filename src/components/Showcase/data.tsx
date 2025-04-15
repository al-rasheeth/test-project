import React from 'react';
import { ShowcaseStep } from './types';
import { CodeIllustration } from './illustrations/CodeIllustration';
import { DatabaseIllustration } from './illustrations/DatabaseIllustration';
import { ApiIllustration } from './illustrations/ApiIllustration';
import {
  Code as CodeIcon,
  Book as BookIcon,
  PlayCircle as PlayIcon,
  Group as GroupIcon,
  Dashboard,
  Security,
  Speed,
} from '@mui/icons-material';
import { Box } from '@mui/material';
import { GRADIENTS } from './constants';

/**
 * Array of showcase steps with their respective content and illustrations
 */
export const showcaseSteps: ShowcaseStep[] = [
  {
    title: 'Welcome to Your Developer Portal',
    description: 'Discover a powerful platform designed to enhance your development workflow and boost productivity.',
    icon: <Dashboard sx={{ fontSize: 40 }} />,
    illustration: '/illustrations/welcome.svg',
    gradient: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
    color: '#1976d2',
  },
  {
    title: 'Lightning Fast Performance',
    description: 'Experience blazing fast load times and smooth interactions with our optimized infrastructure.',
    icon: <Speed sx={{ fontSize: 40 }} />,
    illustration: '/illustrations/performance.svg',
    gradient: 'linear-gradient(45deg, #2e7d32 30%, #4caf50 90%)',
    color: '#2e7d32',
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Your data is protected with industry-leading security measures and encryption standards.',
    icon: <Security sx={{ fontSize: 40 }} />,
    illustration: '/illustrations/security.svg',
    gradient: 'linear-gradient(45deg, #ed6c02 30%, #ff9800 90%)',
    color: '#ed6c02',
  },
  {
    title: 'Developer-First Experience',
    description: 'Built by developers, for developers. Every feature is designed with your needs in mind.',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    illustration: '/illustrations/developer.svg',
    gradient: 'linear-gradient(45deg, #9c27b0 30%, #e040fb 90%)',
    color: '#9c27b0',
  },
]; 
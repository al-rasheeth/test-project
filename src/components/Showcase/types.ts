import { ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material';
import { SvgIconProps } from '@mui/material';

export interface ShowcaseStep {
  /** The title of the showcase step */
  title: string;
  /** The description text for the showcase step */
  description: string;
  /** The icon component to display */
  icon: ReactNode;
  /** The illustration component to display */
  illustration: ReactNode;
  /** The gradient background for the step */
  gradient: string;
  color: string;
}

export interface ShowcaseProps {
  /** Callback function to be called when the showcase is completed */
  onComplete?: () => void;
}

export interface IllustrationProps {
  /** Optional custom styles for the illustration */
  sx?: SxProps<Theme>;
} 
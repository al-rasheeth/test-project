import { SxProps, Theme } from '@mui/material';

export const COLORS = {
  primary: '#072447',
  secondary: '#00d2ff',
  white: '#ffffff',
  black: '#000000',
} as const;

export const GRADIENTS = {
  primary: 'linear-gradient(135deg, #072447 0%, #3a7bd5 100%)',
  secondary: 'linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)',
  tertiary: 'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)',
  quaternary: 'linear-gradient(135deg, #3a7bd5 0%, #072447 100%)',
} as const;

export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
} as const;

export const CARD_STYLES: SxProps<Theme> = {
  maxWidth: 1200,
  width: '90%',
  height: '80vh',
  borderRadius: 4,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  bgcolor: 'white',
};

export const CONTENT_STYLES: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  p: { xs: 4, md: 6 },
  position: 'relative',
  overflow: 'hidden',
};

export const ILLUSTRATION_STYLES: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  p: 4,
  bgcolor: 'white',
  position: 'relative',
};

export const BUTTON_STYLES: SxProps<Theme> = {
  bgcolor: 'white',
  color: COLORS.primary,
  '&:hover': {
    bgcolor: 'rgba(255, 255, 255, 0.9)',
  },
  px: 4,
  py: 1.5,
  borderRadius: 2,
  textTransform: 'none',
  fontSize: '1.1rem',
  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
}; 
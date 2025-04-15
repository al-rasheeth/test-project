import { COLORS } from '../constants';

/**
 * A custom SVG illustration representing code/development
 */
export const CodeIllustration = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none">
    <path
      d="M100 50 L300 50 L350 150 L300 250 L100 250 L50 150 Z"
      fill={COLORS.primary}
      fillOpacity="0.1"
      stroke={COLORS.secondary}
      strokeWidth="2"
    />
    <circle cx="200" cy="150" r="30" fill={COLORS.secondary} fillOpacity="0.2" />
    <path
      d="M180 140 L200 160 L220 140"
      stroke={COLORS.secondary}
      strokeWidth="2"
      fill="none"
    />
  </svg>
); 
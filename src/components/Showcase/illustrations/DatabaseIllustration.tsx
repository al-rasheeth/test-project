import { COLORS } from '../constants';

/**
 * A custom SVG illustration representing a database
 */
export const DatabaseIllustration = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none">
    <ellipse cx="200" cy="100" rx="120" ry="40" fill={COLORS.primary} fillOpacity="0.1" />
    <path
      d="M80 100 L320 100 L300 200 L100 200 Z"
      fill={COLORS.primary}
      fillOpacity="0.1"
      stroke={COLORS.secondary}
      strokeWidth="2"
    />
    <ellipse cx="200" cy="200" rx="120" ry="40" fill={COLORS.primary} fillOpacity="0.1" />
  </svg>
); 
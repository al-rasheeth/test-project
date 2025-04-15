import { COLORS } from '../constants';

/**
 * A custom SVG illustration representing API/network connections
 */
export const ApiIllustration = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none">
    <circle cx="200" cy="150" r="100" fill={COLORS.primary} fillOpacity="0.1" />
    <path
      d="M200 50 L200 250 M50 150 L350 150"
      stroke={COLORS.secondary}
      strokeWidth="2"
      strokeDasharray="5 5"
    />
    <circle cx="200" cy="150" r="20" fill={COLORS.secondary} fillOpacity="0.2" />
  </svg>
); 
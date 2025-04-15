import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from '@mui/material';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle authentication here
    localStorage.setItem('isAuthenticated', 'true');
    navigate(from, { replace: true });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Login
          </Typography>
          <Box component="form" onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{ mt: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login; 
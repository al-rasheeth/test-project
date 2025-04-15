import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute isAuthenticated={!!localStorage.getItem('isAuthenticated')}>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]); 
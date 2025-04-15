import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import BaseLayout from './components/layout/BaseLayout';

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: (
          <ProtectedRoute isAuthenticated={!!localStorage.getItem('isAuthenticated')}>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]); 
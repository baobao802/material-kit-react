import { Navigate, useLocation, useRoutes } from 'react-router-dom';
// layouts
import { useSelector } from 'react-redux';
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Shops from './pages/Shops';
import ShopDetail from './pages/ShopDetail';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

function RequireAuth({ children }) {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        {
          path: 'app',
          element: (
            <RequireAuth>
              <DashboardApp />
            </RequireAuth>
          )
        },
        {
          path: 'users',
          element: (
            <RequireAuth>
              <Users />
            </RequireAuth>
          )
        },
        {
          path: 'users/:userId',
          element: (
            <RequireAuth>
              <UserDetail />
            </RequireAuth>
          )
        },
        {
          path: 'shops',
          element: (
            <RequireAuth>
              <Shops />
            </RequireAuth>
          )
        },
        {
          path: 'shops/:shopId',
          element: (
            <RequireAuth>
              <ShopDetail />
            </RequireAuth>
          )
        },
        {
          path: 'products',
          element: (
            <RequireAuth>
              <Products />
            </RequireAuth>
          )
        }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

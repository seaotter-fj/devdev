import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import CreatePost from '../pages/CreatePost';
import MyPosts from '../pages/MyPosts';
import AllPosts from '../pages/AllPosts';
import Home from '../pages/Home';
import ProtectedRoute from '../components/Layout/ProtectedRoute';
import RootLayout from '../components/Layout/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'reset-password',
        element: <ResetPassword />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'create-post',
            element: <CreatePost />,
          },
          {
            path: 'my-posts',
            element: <MyPosts />,
          },
          {
            path: 'all-posts',
            element: <AllPosts />,
          },
        ],
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
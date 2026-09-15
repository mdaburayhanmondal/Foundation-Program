import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Home from './pages/Home';
import About from './pages/About';
import MainLayout from './layouts/MainLayout';
import Weather from './pages/Weather';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/weather',
        element: <Weather />,
      },
    ],
  },
  {
    path: '/about',
    element: <About />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

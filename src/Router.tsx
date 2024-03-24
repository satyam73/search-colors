import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '@/src/App';
import Home from '@/src/pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/search',
        element: <>Search Page</>,
      },
    ],
  },
]);
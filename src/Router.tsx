import { createBrowserRouter } from 'react-router-dom';

import App from '@/src/App';
import Home from '@/src/pages/Home/Home';
import Search from './pages/Search/Search';

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
        element: <Search/>,
      },
    ],
  },
]);

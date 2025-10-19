import { createBrowserRouter } from 'react-router-dom';
import InaccessibleHome from './pages/inaccessible/Home/Home';
import InaccessibleBlog from './pages/inaccessible/Blog/Blog';
import AccessibleHome from './pages/accessible/Home/Home';
import AccessibleBlog from './pages/accessible/Blog/Blog';
import CheckboxPage from './pages/checkbox/Checkbox';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AccessibleHome />
    ),
  },
  {
    path: '/blog',
    element: (
      <AccessibleBlog />
    ),
  },
  {
    path: '/inaccessible',
    element: (
      <InaccessibleHome />
    ),
  },
  {
    path: '/inaccessible/blog',
    element: (
      <InaccessibleBlog />
    ),
  },
  {
    path: '/checkbox-example',
    element: (
      <CheckboxPage />
    ),
  },
]);

export default router;

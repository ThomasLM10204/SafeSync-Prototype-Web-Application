import {lazy, Suspense, type JSX} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout';
import PublicHome from './pages/PublicHome';
import useUserStore from './services/userStore';

const Home = lazy(() => import('./pages/Home'));
const SignIn = lazy(() => import('./sign-in/SignIn'));
const SignUp = lazy(() => import('./sign-up/SignUp'));

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const user = useUserStore((state) => state.user);
  return user ? element : <SignIn />;
}

const router = createBrowserRouter([
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/", 
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PublicHome />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
              <PrivateRoute element={<Home />}/>
          </Suspense>
        ),
      },
    ],
  }
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
// import Login from '../pages/Login.tsx';
// import Profile from '../pages/Profile';

import About from '../pages/About';
import Home from '../pages/Home';
import Photo from '../pages/Photo';

// export const privateRoutes = [
//   { path: '/', element: <Login /> },
//   { path: '/profile/:id', element: <Profile /> },
//   { path: '/login', element: <Login /> },
//   { path: '*', element: <Login /> },
// ];

export const publicRoutes = [
  // { path: '/login', element: <Login /> },
  { path: '*', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/photo', element: <Photo /> },
  { path: '/posts', element: <Photo /> },
];

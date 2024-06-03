import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './pages/App.jsx'
import './styles/staticindex.css'
import ErrorPage from './pages/ErrorPage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import AboutUs from './pages/AboutUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <App />,
      },
      {
        path: "/portfolio",
        element: <div className="h-screen"><h1>Portfolio Page</h1></div>,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

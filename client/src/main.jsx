import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import LandingPage from "./components/LandingPage.jsx";
import App from "./App.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/app",
    element: <App />,
  },
    
    
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode>,
)
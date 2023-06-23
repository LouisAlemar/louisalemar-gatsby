import React from 'react';
import { Switch, Route, createBrowserRouter, RouterProvider, } from 'react-router-dom';
import LandingPage from '../landing_page/landing_page';
import Resume from '../resume/resume';
import Portfolio from '../portfolio/portfolio';
import Contact from '../contact/contact';
import Navbar from '../navbar/navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const Main = () => (
	<RouterProvider router={router} />
)

export default Main;
import CustomerListView from "../src/views/customer/CustomerListView";
import AdminLayout from "./components/AdminLayout";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "../src/components/GlobalStyles";
import theme from "../src/theme/index";
import React from 'react';
import { Navigate } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import EventPage from "./components/Event/EventPage";
import Page from "./components/Page";
import PageNotFound from "./components/404/404";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainLayout from "./components/MainLayout";
const routes = [
  {
    path: 'admin',
    element: <AdminLayout />,
    children: [
      
      { path: 'customers', element: <CustomerListView/> },
      { path: '*', element: <PageNotFound/> }
    ]
  },
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      { path: 'home', element: <Home/>},
      { path: 'login', element: <Login/>},
      { path: 'event', element: <EventPage/>}
    ]
  }
  // {
  //   path: '/',
  //   element: <MainLayout />,
  //   children: [
  //     { path: 'login', element: <LoginView /> },
  //     { path: 'register', element: <RegisterView /> },
  //     { path: '404', element: <NotFoundView /> },
  //     { path: '/', element: <Navigate to="/app/dashboard" /> },
  //     { path: '*', element: <Navigate to="/404" /> }
  //   ]
  // }
];
export default routes;


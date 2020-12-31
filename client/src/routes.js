import CustomerListView from "../src/views/customer/CustomerListView";
import AdminLayout from "./components/AdminLayout";
import React from "react";
import { Navigate } from "react-router-dom";
import {useSelector} from "react-redux"
import EventPage from "./components/Event/EventPage";
import PageNotFound from "./components/404/404";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainLayout from "./components/MainLayout";
import Register from "./components/Register/Register";
import ActivationEmail from "./components/Register/Activation";
import EventDetail from "./components/Event/EventDetail";

const routes = [
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      { path: "customers", element: <CustomerListView /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Navigate to="/" /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "user", element: <ActivationEmail /> },
      { path: "404", element: <PageNotFound /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "events",
    element: <MainLayout />,
    children: [
      { path: "/", element: <EventPage /> },
      { path: ":id", element: <EventDetail /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
  {
    path: "user",
    element: <MainLayout />,
    children: [
      {
        path: "activate",
        children: [{ path: ":activation_token", element: <ActivationEmail /> }],
      },
    ],
  },
];
export default routes;

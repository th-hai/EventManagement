import React from "react";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useRoutes,
} from "react-router-dom";

import PageNotFound from "./components/404/404";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import SearchBar from "./components/Event/SearchBar";
import EventPage from "./components/Event/EventPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import CustomerListView from "./views/customer/CustomerListView";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "../src/components/GlobalStyles";
import "../src/mixins/chartjs";
import theme from "../src/theme";
import routes from "../src/routes";
import DashboardLayout from "./components/AdminLayout";
function App() {
  const routing = useRoutes(routes);
  // const [contentHeight, setContentHeight] = React.useState(
  //   window.innerHeight - 200
  // );
  // const navbarRef = useRef();
  // const footerRef = useRef();
  // const Content = () => {
  //   window.innerHeight - navbarRef.current.of
  // }
  return (
  

      <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}

    </ThemeProvider>

  );
}

export default App;

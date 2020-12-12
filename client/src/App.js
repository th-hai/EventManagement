import React from "react";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
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
function App() {
  // const navbarRef = useRef();
  // const footerRef = useRef();
  // const Content = () => {
  //   window.innerHeight - navbarRef.current.of
  // }
  return (
    <div>
      <Navbar class="sticky" />
      <Router>
        <Switch>
        <Route exact path="/contact">
<Contact/>
        </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register" >
            <Register />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Redirect to="/" />
          </Route>
          <Route exact path="/event">
            <EventPage />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

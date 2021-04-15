import "./App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AnimatedWebsite = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/service" component={Service} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default AnimatedWebsite;

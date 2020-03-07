import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import ResponsiveDrawer from "./components/nav/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import CV from "./components/cv/cv";
import Projects from "./components/projects/projects";
import Contact from "./components/contacts/contact";
import Footer from './components/footer/footer';
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <ResponsiveDrawer>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/cv">
              <CV />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        <Footer/>
        </ResponsiveDrawer>
      </Router>
    );
  }
}

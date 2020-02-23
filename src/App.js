import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Grid from "@material-ui/core/Grid";
import ResponsiveDrawer from "./components/nav/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import CV from "./components/cv/cv";
import Projects from "./components/projects/projects";
import Contact from "./components/contacts/contact";
import Drawer from '@material-ui/core/Drawer';
export default class App extends React.Component {
  // state = {
  //   open: true
  // }
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
      
    
        </ResponsiveDrawer>
    
      </Router>
    );
  }
}

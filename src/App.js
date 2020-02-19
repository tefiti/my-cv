import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Dropdown from './components/dropdown/dropdown';
import Nav from './components/nav/nav';
import Home from './components/home/home';
import About from './components/about/about';
import CV from './components/cv/cv';
import Projects from "./components/projects/projects";
import Contact from "./components/contacts/contact";

export default class App extends React.Component {
  render(){
    return (
      <Router>
      <Container fluid>
      <Row>
        <Dropdown />
        <Col md={3}>
        <Nav />
        </Col>
        <Col md={9}>
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
        </Col>
        </Row>
        </Container>
      </Router>
    );
  }
}



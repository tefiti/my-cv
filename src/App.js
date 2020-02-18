import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';


import Home from './components/home';
import About from './components/about';
import CV from './components/cv';
import Projects from "./components/projects";
import Contact from "./components/contact";

class App extends React.Component {
  
  render(){
  return (
    <Router>
      <div>
        <ul className={this.props.name}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT ME</Link>
          </li>
          <li>
            <Link to="/cv">CV</Link>
          </li>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>


      
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
      </div>
    </Router>
  );
}
}


export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  
  render () {
    return (
      <div className='dropdown'>
        <div className="container" onClick={this.handleClick}>
          <div className="bars">
            <div className={this.state.isToggleOn? "change bar1": "bar1"}></div>
            <div className={this.state.isToggleOn? "change bar2": "bar2"}></div>
            <div className={this.state.isToggleOn? "change bar3": "bar3"}></div>
          </div>
          <div className="menu">MENU</div>
        </div>
        {this.state.isToggleOn? <App name="show app"/>: <App name="app"/>}

        
      </div>
  )
}
}

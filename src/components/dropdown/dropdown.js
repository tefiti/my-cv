import React from 'react';

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
        <div className="dropdown">
          <div className="contain" onClick={this.handleClick}>
            <div className="bars">
              <div className={this.state.isToggleOn? "change bar1": "bar1"}></div>
              <div className={this.state.isToggleOn? "change bar2": "bar2"}></div>
              <div className={this.state.isToggleOn? "change bar3": "bar3"}></div>
            </div>
          </div>
          {/* <ul className={this.state.isToggleOn? "show app":"app"}>
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
            </ul> */}
        </div>
    )
  }
  }
  
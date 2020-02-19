import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';
import ProfilePicture from './WhatsApp Image 2020-02-11 at 17.15.51.jpeg';

export default class Nav extends React.Component {
    render() {
    return(
        <nav className="nav">
        <img className="profilePicture" src={ProfilePicture} alt="woman portrain"></img>
        <h2 className="myName">Oana Fuia</h2>
    <ul className="show app">
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
    </nav>
    )
}
}
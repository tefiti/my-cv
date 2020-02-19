import React from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
    return(
    <ul>
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
    )
}
}
import React, { Fragment } from 'react';
import './cv.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const CV = () => {
    return (
      <Fragment className="cv">
      <Paper className="paper" elevation={3}>
        <h2>Skills</h2>
        <p><Skills/></p>
        <hr></hr>
        <h2>Professional Trainings</h2>
        <p><Professional/></p>
        <hr></hr>
        <h2>Work History</h2>
        <p><Work/></p>
        <hr></hr>
        <h2>Education</h2>
        <p><Education/></p>
        <hr></hr>
        <h2>Foreign Languages</h2>
        <p><Languages/></p>
        </Paper>
      </Fragment>
    );
}

class Skills extends React.Component {
  render() {
    return(
      <div>
        <ul>
        <Grid container>
        <Grid item xs={12} md={6}>
          <li>Hard Work</li>
          <li>Creativity</li>
          <li>Team Work</li>
          </Grid>
          <Grid item xs={12} md={6}>
          <li>Adaptability</li>
          <li>Integrity</li>
          </Grid>
          </Grid>
        </ul>
      </div>
    )
  }
}

class Professional extends React.Component {
  render() {
    return (
      <div>
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <h4>Informal School of It - Front-end Web Developer</h4>
        <h6>oct 2019-march 2020</h6>
        <ul>
          <li>HTTP: fundamentals about the protocol: methods, headers, error codes</li>
          <li>HTML5 and CSS3: how to build a User Interface</li>
          <li>avaScript: how to use variables, functions, objects, scope, DOM manipulation, AJAX, fetch API, Promises</li>
          <li>ES6: scoping, let and const, arrow functions, classes, getters/setters and static class methods, template string, array methods (forEach, map, find, some, every, reduce etc), enhanced object literals, destructuring</li>
          <li>OOP: basics about classes, objects and inheritance in JS</li>
          <li>REACT: props and state, functional based components, class based components, react router</li>
          <li>GIT: learned the principles and basic commands</li>
        </ul>
        </Grid>
        <Grid item xs={12} md={6}>
        <h4>Informal School of IT - Intro in IT</h4>
        <h6>2019</h6>
        <ul>
          <li>How an application comes to life: team roles, app's lifecycle</li>
          <li>Algorithms and pseudocode</li>
          <li>HTML5, CSS3, JavaScript</li>
          <li>SQL: basic commands</li>
          <li>Testing: software bugs, testing process, testing types, test design techniques</li>
        </ul>
        </Grid>
        </Grid>
      </div>
    )
  }
}

class Work extends React.Component {
  render() {
    return(
      <div>
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <h4>Pharmacist</h4>
        <h6>2005-2019</h6>
        <ul>
          <li>colleagues often asked for my help related to the use of the healthcare software;</li>
          <li>prepared/dispensed medications;</li>
          <li>offered professional counseling;</li>
          <li>ordered pharmaceutical supplies, medical supplies, drugs;</li>
          <li>introduced and filed invoices.</li>
        </ul>
        </Grid>
        <Grid item xs={12} md={6}>
        <h4>Spitalul Clinic Municipal Cluj-Napoca - Pharmacist with Specialization – Pharmaceutical Laboratory</h4>
        <h6>2016-2018</h6>
        <ul>
          <li>researched and analyzed scientific data;</li>
          <li>wrote reports and reviews.</li>
        </ul>
        </Grid>
        </Grid>
      </div>
    )
  }
}

class Education extends React.Component {
  render() {
    return(
      <div>
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <h4>UMF Iuliu Hatieganu - Master's Degree: Environmental Toxicology</h4>
        <h6>2005-2006</h6>
        </Grid>
        <Grid item xs={12} md={6}>
        <h4>UMF Iuliu Hatieganu - Bachelor's Degree: Pharmacy</h4>
        <h6>2000-2005</h6>
        <h4>CHU Ch. Nicole Rouen (France) - Phamacy: Erasmus student</h4>
        <h6>2004</h6>
        </Grid>
        </Grid>
      </div>
    )
  }
}

class Languages extends React.Component {
  render() {
    return (
      <div>
        <ul>
        <Grid container>
        <Grid item xs={12} md={6}>
          <li>English: advanced</li>
          <li>French: advanced</li>
          </Grid>
          <Grid item xs={12} md={6}>
          <li>Deutsch: beginner</li>
          </Grid>
          </Grid>
        </ul>
      </div>
    )
  }
}
export default CV;

import React from 'react';

const CV = () => {
    return (
      <div className="cv">
        <h2>Skills</h2>
        <p><Skills/></p>
        <h2>Professional Trainings</h2>
        <p><Professional/></p>
        <h2>Work History</h2>
        <p><Work/></p>
        <h2>Education</h2>
        <p><Education/></p>
        <h2>Foreign Languages</h2>
        <p><Languages/></p>
      </div>
    );
}

class Skills extends React.Component {
  render() {
    return(
      <div>
        <ul>
          <li>Hard Work</li>
          <li>Creativity</li>
          <li>Team Work</li>
          <li>Adaptability</li>
          <li>Integrity</li>
        </ul>
      </div>
    )
  }
}

class Professional extends React.Component {
  render() {
    return (
      <div>
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
        <h4>Informal School of IT - Intro in IT</h4>
        <h6>2019</h6>
        <ul>
          <li>How an application comes to life: team roles, app's lifecycle</li>
          <li>Algorithms and pseudocode</li>
          <li>HTML5, CSS3, JavaScript</li>
          <li>SQL: basic commands</li>
          <li>Testing: software bugs, testing process, testing types, test design techniques</li>
        </ul>
      </div>
    )
  }
}

class Work extends React.Component {
  render() {
    return(
      <div>
        <h4>Pharmacist</h4>
        <h6>2005-2019</h6>
        <ul>
          <li>colleagues often asked for my help related to the use of the healthcare software;</li>
          <li>prepared/dispensed medications;</li>
          <li>offered professional counseling;</li>
          <li>ordered pharmaceutical supplies, medical supplies, drugs;</li>
          <li>introduced and filed invoices.</li>
        </ul>
        <h4>Spitalul Clinic Municipal Cluj-Napoca - Pharmacist with Specialization – Pharmaceutical Laboratory</h4>
        <h6>2016-2018</h6>
        <ul>
          <li>researched and analyzed scientific data;</li>
          <li>wrote reports and reviews.</li>
        </ul>
      </div>
    )
  }
}

class Education extends React.Component {
  render() {
    return(
      <div>
        <h4>UMF Iuliu Hatieganu - Master's Degree: Environmental Toxicology</h4>
        <h6>2005-2006</h6>
        <h4>UMF Iuliu Hatieganu - Bachelor's Degree: Pharmacy</h4>
        <h6>2000-2005</h6>
        <h4>CHU Ch. Nicole Rouen (France) - Phamacy: Erasmus student</h4>
        <h6>2004</h6>
      </div>
    )
  }
}

class Languages extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>English: advanced</li>
          <li>French: advanced</li>
          <li>Deutch: beginner</li>
        </ul>
      </div>
    )
  }
}
export default CV;
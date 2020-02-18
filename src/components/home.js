import React from 'react';
import './home.css';

function Home() {
    return (
      <div className="home">
        <div className="myName">
          <h1>Oana Fuia</h1>
          <h3>Front-end Web Developer</h3>
        </div>
        <div className="quotation">
          <q>Allow passion to become your purpose, and it will one day become your profession.</q>
          <p>Gabrielle Bernstein</p>
        </div>
      </div>
    );
}

export default Home;
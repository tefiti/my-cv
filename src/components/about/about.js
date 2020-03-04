import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import myPicture from '../images/michael-dam-mEZ3PoFGs_k-unsplash.jpg';
import './about.css';

function About() {
    return (
      <div className="about">
      <Grid container>
      <Grid item className="aboutText" xs={12} md={6}>
      <Slide direction="right" in={true} timeout={3000} mountOnEnter unmountOnExit>
        <div className="aboutTextStyle">
          <h1>about me</h1>
          <p>I used to be a pharmacist, but I didn't love it and I was 
          searching for something more meaningful.
          </p>
          <p>Now I am determined to become an excellent web developer, even though I sometimes feel overwhelmed of the distance I 
          have to cross to get there.</p>
          <p>So...why do I love programming? Here are three reasons:</p>
          <p>it challenges me every day with my own limits;</p>
          <p>it allows me to be as creative as a child;</p>
          <p>I can make things that are useful to other people.</p>
        </div>
        </Slide>
        </Grid>
        <Grid className="myPhoto"item xs={12} md={6}>
        <Slide direction="left" in={true} timeout={3000} mountOnEnter unmountOnExit>
          <img className="myPhotoStyle" src={myPicture} alt="woman smiling"></img>
          </Slide>
        </Grid>
      </Grid>  
      </div>
    );
}

export default About;
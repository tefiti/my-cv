import React from "react";
import Grid from "@material-ui/core/Grid";
import Typist from 'react-typist';

import "./home.css";

function Home() {
  return (
    <Grid
      container
      className="home current"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={8} className="myNameTitle">
      <Typist>
        <h1 className="myNameHome">Hi,I'm Oana</h1>
 
  <Typist.Delay ms={500} />
        <h2 className="myTitle">Welcome to my cv</h2>
 
</Typist>
      </Grid>
      <Grid item xs={9} className="quote">
        <q className="quoteCOntent">
          Allow passion to become your purpose, and it will one day become your
          profession.
        </q>
        <p>Gabrielle Bernstein</p>
      </Grid>
    </Grid>
  );
}

export default Home;

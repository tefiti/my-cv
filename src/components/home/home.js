import React from "react";
import Grid from "@material-ui/core/Grid";

import "./home.css";

function Home() {
  return (
    <Grid
      container
      className="home"
      // spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={8} className="myNameTitle">
        <h1 className="myTitle">Hi,I'm Oana</h1>
        <h2 className="myTitle">Welcome to my cv</h2>
      </Grid>
      <Grid item xs={9} className="quotation">
        <q>
          Allow passion to become your purpose, and it will one day become your
          profession.
        </q>
        <p>Gabrielle Bernstein</p>
      </Grid>
    </Grid>
  );
}

export default Home;

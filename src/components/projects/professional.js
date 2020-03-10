import React from "react";
import image1 from "../images/Screenshot_2020-03-03 IMDb Ratings, Reviews, and Where to Watch the Best Movies TV Shows.jpg";
import image2 from "../images/Screenshot_2020-03-03 Oana's Blog.png";
import image3 from "../images/Screenshot_2020-03-03 Weather.jpg";
import image4 from "../images/Screenshot_2020-03-03 Game.png";
import image5 from "../images/Screenshot_2020-03-03 Rock Paper Scissors.jpg";
import image6 from "../images/zach-lucero-qAriosuB-lY-unsplash.jpg";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./projects.css";

const professionalProjects = [
  {
    key: "1",
    image: image1,
    title: "My IMDB",
    text:
      "As part of a team, we developed a project, where you can search for movies, make an account so you can add, edit or delete them. "
  },
  {
    key: "2",
    image: image2,
    title: "Responsive blog",
    text: "I learnt to make a page responsive using the Bootstrap grid system."
  },
  {
    key: "3",
    image: image3,
    title: "Weather App",
    text: "I used cookies and local storage to save user's preferences."
  },
  {
    key: "4",
    image: image4,
    title: "Game: The Mover",
    text: "You have to arrive to the pig without touching the obstacles."
  },
  {
    key: "5",
    image: image5,
    title: "Game: Rock Paper Scissors",
    text: "Play with the computer. First game I have ever made!"
  },
  {
    key: "6",
    image: image6,
    title: "Waiting to start new projects",
    text:
      "Now that school is over, I am eager to start my own new personal projects!"
  }
];

const Professional = () => {
  return (
    <Grid container spacing={2} className="containerProjects">
      <Grid item className="titleProjects" xs={12}>
        <h1>Professional Projects</h1>
      </Grid>
      {professionalProjects.map(element => (
        <Grid item xs={12} md={6} lg={4} key={element.key}>
          <Card className="cardProject">
            <CardMedia
              className="cardImage"
              image={element.image}
              alt="Card image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {element.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {element.text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Professional;

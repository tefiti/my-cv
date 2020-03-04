import React from 'react';
import image1 from "../images/DSC_7713.JPG";
import image2 from "../images/glass-bottle-lighting-wine-bottle-beaker-glass-bottle-597793-pxhere.com.jpg";
import image3 from "../images/wheel-cloth-fabric-sewing-sewing-machine-art-860414-pxhere.com.jpg";
import image4 from "../images/sarah-dorweiler-x2Tmfd1-SgA-unsplash.jpg";
import image5 from "../images/mel-poole-AjunspIfggc-unsplash.jpg";
import image6 from "../images/laura-mitulla-52-C-a008FI-unsplash.jpg";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './projects.css';

const personalProjects = [
    {
        "category": "Personal",
        "image": image1,
        "title": "Makeup",
        "text": "It is fun and rewarding!It helps women bring out the most confident version of themselves."

    },
    {
        "category": "Personal",
        "image": image2,
        "title": "DIY Cosmetics",
        "text": "I am interested in making healthier and more natural products. I have learnt to prepare cosmetics in school and I am also a certified beautician. "
    },
    {
        "category": "Personal",
        "image": image3,
        "title": "Sewing",
        "text": "It's an interest I inherited from my grandmother, who was a seamstress. I only tried small projects so far, but who knows what the future holds?"
    },
    {
        "category": "Personal",
        "image": image4,
        "title": "Minimalism",
        "text": "I discovered minimalism when I was searching for tips on how to save money. I liked the idea, it helped me organize better and focus on what's important."
    },
    {
        "category": "Personal",
        "image": image5,
        "title": "DIY Decor",
        "text": "When I have time, I make decorations out of natural materials. I also like to make paper flowers."
    },
    {
        "category": "Personal",
        "image": image6,
        "title": "Sustainable living, reducing waste",
        "text": "Do you know the 5 R's? Refuse, Reduce, Reuse, Recycle, Rot."
    }

];

const Personal = () => {
    return (
      <Grid container spacing={2} className="containerProjects">
        <Grid item className="titleProjects" xs={12}>
        <h1>
          Personal Projects
        </h1>
        </Grid>
            {personalProjects.map((element, index) => (
        <Grid item xs={12} md={6} lg={4}>
              <Card className="cardProject" key={index}>
                <CardMedia className="cardImage"
                  image = {element.image}
                  alt="Card image"/>
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
            ))
            }
      </Grid>
    )
  };
  
  
  export default Personal;
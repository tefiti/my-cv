import React from "react";

import "./contact.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ContactImage from "../images/alvaro-serrano-hjwKMkehBco-unsplash.jpg";
import ContactUs from "./contact-form";

function Contact() {
  return (
    <Card className="card">
      <CardMedia className="media" image={ContactImage} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Contact
        </Typography>
        <Typography>
          Feel free to contact me anytime. If you have questions or feedback or
          just want to have a nice chat, I'll be happy to respond!
        </Typography>
        <Typography>
          You can always reach out to me on{" "}
          <a href="https://linkedin.com/in/oana-fuia-04741428" target="blank">
            LinkedIn
          </a>
          ,
          <a href="https://github.com/tefiti" target="blank">
            Github
          </a>
          , or send me an email by completing the fields down below:
        </Typography>
        <ContactUs />
      </CardContent>
    </Card>
  );
}

export default Contact;

import React from 'react';

import './contact.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ContactImage from '../images/alvaro-serrano-hjwKMkehBco-unsplash.jpg';



function Contact() {
    return (
        <Card className="card" >
        {/* <CardActionArea> */}
          <CardMedia
            className="media"
            image={ContactImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Contact
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Feel free to contact me anytime. If you have questions or feedback or just want to have a nice chat, I'll be happy to respond!
            </Typography>
            <Typography>
    You can always reach out to me on <a href="https://linkedin.com/in/oana-fuia-04741428" target="blank">LinkedIn</a>, <a href="https://github.com/tefiti" target="blank">Github</a>, or send me an email to: <a href="mailto:oanamarinica@yahoo.com" target="blank">oanamarinica@yahoo.com</a>
            </Typography>
          </CardContent>
        {/* </CardActionArea> */}
        
      </Card>
      
    )      
}

export default Contact;
import React, { useState } from "react";
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";
import "./contact-form.css";
import NotificationModal from "./modal";
import Grid from "@material-ui/core/Grid";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import MessageIcon from "@material-ui/icons/Message";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [serverResponse, setServerResponse] = useState("");
  const [open, setOpen] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_QkEPK7WN",
        e.target,
        "user_wVz4hbOOmpOYWW3G5T6RE"
      )
      .then(
        result => {
          console.log(result.text);
          setServerResponse(
            "Your message was sent. I'll get back to you as soon as possible."
          );
          setOpen(true);
          setTimeout(() => {
            setName("");
            setEmail("");
            setMessage("");
          }, 200);
        },
        error => {
          console.log(error.text);
          setServerResponse("Something went wrong! Please try again.");
          setOpen(true);
        }
      );
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <div className="myForm">
        <input type="hidden" name="contact_number" />
        <div>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <PersonIcon />
            </Grid>
            <Grid item>
              <TextField
                required
                id="standard-required"
                label="name"
                name="user_name"
                type="text"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <MailIcon />
            </Grid>
            <Grid item>
              <TextField
                required
                id="standard-required"
                label="email"
                name="user_email"
                type="text"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <MessageIcon />
            </Grid>
            <Grid item>
              <TextField
                required
                id="standard-required"
                id="standard-multiline-flexible"
                multiline
                label="message"
                name="message"
                type="text"
                value={message}
                onChange={event => setMessage(event.target.value)}
              />
            </Grid>
          </Grid>
        </div>
        <div className="buttons">
          <input type="submit" className="submitButton" value="Send" />
          {open ? (
            <NotificationModal
              open={open}
              setOpen={setOpen}
              serverResponse={serverResponse}
            />
          ) : null}
        </div>
      </div>
    </form>
  );
}

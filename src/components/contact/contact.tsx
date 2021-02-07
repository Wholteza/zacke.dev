import React from "react";
import "./contact.scss";
import ProfilePath from "./profile.svg";
const Contact = () => {
  return (
    <div className="contact">
      <h1 className="color-title">&gt; CONTACT</h1>
      <img className="profile-picture" src={ProfilePath} alt="Profile"></img>
      <div className="row"></div>
    </div>
  );
};
export default Contact;

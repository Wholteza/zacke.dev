import React from "react";
import "./contact.scss";
import BlinkingCursor from "../../layout/decorative/blinking-cursor";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <h1 className="color-title">&gt; HI THERE!</h1>
      <div className="row">
        <span className="code">This page is under construction</span>
        <BlinkingCursor />
      </div>
      <Link to="/test">Go test route</Link>
    </>
  );
};
export default Contact;

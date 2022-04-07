import React from "react";
import Links from "./Links";

function About(props) {
  // const bio = props.bio;
  // const bioLength = bio.length;
  // console.log(bioLength);
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin}/>

    </div>
  );
}

export default About;
import React, { useEffect, useRef } from "react";
import "./style.scss";

type Props = {
  switchs: boolean;
};

const About = (props: Props) => {
  const { switchs } = props;
  const ref = useRef(null as null | HTMLDivElement)
  
  
  return (
    <div className="About" id = "About">
      <h1 className="About_title fadeInUp_animation" style={switchs ? { color: "#454360" } : { color: "#fff" }} ref={ref}>
        about me
      </h1>
      <div className="spacer"></div>
      <div className="about_intro">
        <div className="about_image">
          <img
            src="https://jthemes.net/themes/html/bolby/demo/images/avatar-2.svg"
            alt="Bac"
          />
        </div>
        <div
          className="intro"
          style={
            switchs
              ? {
                  backgroundColor: "#fff",
                  color: "#000",
                  boxShadow: "0px 5px 20px 0px #ccc",
                }
              : {
                  backgroundColor: "#302f4e",
                  color: "#fff",
                  boxShadow: "0px 5px 20px 0px transparent",
                }
          }
        >
          <p>
            I am Bolby Doe, web developer from London, United Kingdom. I have
            rich experience in web site design and building and customization,
            also I am good at WordPress.
          </p>
          <button className="btn btn-default">Download CV</button>
        </div>
      </div>
      <ul className="list_lang mt-4"  style={
            switchs
              ? {
                  backgroundColor: "#fff",
                  color: "#000",
                  boxShadow: "0px 5px 20px 0px #ccc",
                }
              : {
                  backgroundColor: "#302f4e",
                  color: "#fff",
                  boxShadow: "0px 5px 20px 0px transparent",
                }
          }>
        <li className="lang-item">
          <span className="lang-title">HTML</span>
        </li>
        <li className="lang-item">
          <span className="lang-title">CSS</span>
        </li>
        <li className="lang-item">
          <span className="lang-title">JS</span>
        </li>
        <li className="lang-item">
          <span className="lang-title">NodeJS</span>
        </li>
        <li className="lang-item">
          <span className="lang-title">ReactJS</span>
        </li>
        <li className="lang-item">
          <span className="lang-title">Material-UI</span>
        </li>
      </ul>
    </div>
  );
};

export default About;

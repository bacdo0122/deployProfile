import React from "react";
import ServiecItem from "../ServiecItem";
import ExperienceDetail from './ExperienceDetail/index'
import './style.scss'
type Props = {
  switchs: boolean;
};
const list_degree = [
  {
   time: "2013 - 2009",
   degree: "Honours Degree",
    title:"Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto."
  },
  {
    time: "2017 - 2013",
    degree: "Bachelor’s Degree",
     title:"Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto."
   },
   {
    time: "2019 - Present",
    degree: "Academic Degree",
     title:"Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto."
   },
  
];
const list_job = [
  {
   time: "2013 - 2009",
   degree: "Back-End Developer",
    title:"Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto."
  },
  {
    time: "2017 - 2013",
    degree: "Front-End Developer",
     title:"Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto."
   },
   {
    time: "2019 - Present",
    degree: "Web Designer",
     title:"Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto."
   },
  
];
const Experience = (props: Props) => {
  const { switchs } = props;
  return (
    <div className="About mt-4" id="Experience">
      <h1 className="About_title fadeInUp_animation" style={switchs ? { color: "#454360" } : { color: "#fff" }}>
        experience
      </h1>
      <div className="spacer"></div>
      <div className="list-experiences">
        <ExperienceDetail switchs={switchs} list={list_degree} type="degree" />
        <ExperienceDetail switchs={switchs} list={list_job} type="job"/>
      </div>
    </div>
  );
};
export default Experience;

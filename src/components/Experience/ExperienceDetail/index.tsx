import React from "react";
import "./style.scss";
type Props = {
  switchs: boolean;
  list: Array<any>;
  type: String;
};

const Experience = (props: Props) => {
  const { switchs, list, type } = props;
  return (
    <div className="Experience-detail">
      <div className="container">
        <ul className="list-item">
          {list.map((item, index) => {
            return (
              <li className="experience-item fadeInUp_animation" key={index}>
                <span className="ex-title">{item.time}</span>
                <h1>{item.degree}</h1>
                <p>{item.title}</p>
                {type === "degree" ? (
                  <i className="fas fa-graduation-cap"></i>
                ) : (
                  <i className="fas fa-briefcase"></i>
                )}
                <span className="line"></span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Experience;

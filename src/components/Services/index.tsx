import React from "react";
import ServiecItem from "../ServiecItem";
import './style.scss'
type Props = {
  switchs: boolean;
};
const list_servers = [
  {
    image: "https://jthemes.net/themes/html/bolby/demo/images/service-1.svg",
    job: "UI/UX design",
    bg: "#6C6CE5",
    title:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
  {
    image: "https://jthemes.net/themes/html/bolby/demo/images/service-2.svg",
    job: "Web Development",
    bg: "#F9D74C",
    title:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
  {
    image: "https://jthemes.net/themes/html/bolby/demo/images/service-3.svg",
    job: "Photography",
    bg: "#F97B8B",
    title:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
];
const Servers = (props: Props) => {
  const { switchs } = props;
  return (
    <div className="About mt-4" id = "Services">
      <h1 className="About_title fadeInUp_animation" style={switchs ? { color: "#454360" } : { color: "#fff" }}>
        services
      </h1>
      <div className="spacer"></div>
      <ul className="list-servers">
        {list_servers.map((item,index)=>{
            return <ServiecItem {...item} key={index} />
        })}
      </ul>
      <div className="mt-4 text-center">Looking for a custom job? <a href="/">Click here</a> to contact me! 👋</div>
    </div>
  );
};
export default Servers;

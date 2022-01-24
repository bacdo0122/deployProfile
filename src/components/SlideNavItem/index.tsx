import React, { ReactNode } from "react";
import './style.scss'
interface Props {
  icon: ReactNode;
  text: String;
  switchs:boolean
}

export const SlideNavItem = (props: Props) => {
  const { icon, text,switchs } = props;
  return (
    <li className="slide-nav-item">
      <a href="#" className="slide-nav-item__link"  style={
        switchs
          ? {  color: "#000" }
          : {  color: "#fff" }
      }>
        {icon}
        <div className="slide-nav-text">{text}</div>
      </a>
    </li>
  );
};

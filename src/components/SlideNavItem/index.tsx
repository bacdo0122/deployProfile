import React, { ReactNode } from "react";
import "./style.scss";
interface Props {
  icon: ReactNode;
  text: String;
  switchs: boolean;
  active: string;
  setActive: any;
}

export const SlideNavItem = (props: Props) => {
  const { icon, text, switchs, active, setActive } = props;
  return (
    <li className="slide-nav-item">
      <a
        href={`#${text}`}
        className="slide-nav-item__link"
        style={switchs ? { color: "#000" } : { color: "#fff" }}
        onClick={()=>setActive(text)}
      >
        {icon}
        <div
          className={
            active === text ? "slide-nav-text active_item" : "slide-nav-text"
          }
        >
          {text}
        </div>
      </a>
    </li>
  );
};

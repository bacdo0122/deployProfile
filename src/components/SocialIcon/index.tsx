import React from "react";

interface Props {
  iconClass: String;
  switchs: boolean;
}

export const SocialIcon = (props: Props) => {
  const { iconClass, switchs } = props;
  return (
    <li className="social-icon ">
      <a href="#" className="social-icon-link">
        <i
          className={`${iconClass}`}
          style={switchs ? { color: "#000" } : { color: "#fff" }}
        ></i>
      </a>
    </li>
  );
};

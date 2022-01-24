import React from "react";
import "./style.scss";
interface Props {
  onClick: () => void;
  switchs: boolean;
}

export const Header = (props: Props) => {
  const { onClick, switchs } = props;
  return (
    <div
      className="header"
      style={switchs ? { color: "#000" } : { color: "#fff" }}
    >
      <i className="fas fa-bars header__icon" onClick={onClick}></i>
      <div className="header__title">
        <a
          href="#"
          className="header__link"
          style={switchs ? { color: "#000" } : { color: "#fff" }}
        >
          Bac
        </a>
      </div>
    </div>
  );
};

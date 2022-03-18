import React from "react";

import "./style.scss";
import { Parallax } from "../Parallax";
import { Intro } from "../Intro";
interface Props {
  t: any;
  switchs: boolean;
}

export const Home = (props: Props) => {
  const { t, switchs } = props;
  return (
    <div className="Home" id="Home">
      <Intro t={t} switchs={switchs} />
      <Parallax />
    </div>
  );
};

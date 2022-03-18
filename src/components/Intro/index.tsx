import React, { useState,useEffect } from "react";
import { SocialIcon } from "../SocialIcon";
interface Props {
  t: any;
  switchs: boolean;
}
const list_icon = [
  "fab fa-instagram",
  "fab fa-twitter",
  "fab fa-behance",
  "fab fa-dribbble",
  "fab fa-pinterest-p",
];
const list_jobs = ["IT", "Fullstack developer", "UI/UX designer"]
export const Intro = (props: Props) => {
  const { t, switchs } = props;
  let [job, setJob]= useState<number>(0);
  useEffect(() => {
    const time = setTimeout(()=>{
     setJob(job === 2 ? 0 : ++job)
    }, 4000)
    return  ()=>{
    clearTimeout(time)
   }
  }, [job])
  
  return (
    <div className="container">
      <div
        className="intro"
        style={switchs ? { color: "#000" } : { color: "#fff" }}
      >
        <img
          src="https://jthemes.net/themes/html/bolby/demo/images/avatar-1.svg"
          alt="Bac"
          className="mb-2"
        />
        <h1 className="mb-2">Bac Do</h1>
        <span>
          {t("recommend")}{" "}
          <span className="text-changing">
            <span className="animation-bouncing">{list_jobs && list_jobs[job]}</span>
          </span>
        </span>
        <ul className="social-list-icons mt-4">
          {list_icon.map((item, index) => {
            return (
              <SocialIcon iconClass={item} key={index} switchs={switchs} />
            );
          })}
        </ul>
        <div className="mt-4">
          <a href="#" className="btn btn-default">
            {t("hide")}
          </a>
        </div>
      </div>
      <div className="scroll__down mt-3" id="Home">
        <a
          href="#About"
          style={switchs ? { color: "#000" } : { color: "#fff" }}
        >
          <span className="mb-2">{t("scroll")}</span>
          <span
            className="mouse mt-1"
            style={switchs ? { borderColor: "#000" } : { borderColor: "#fff" }}
          >
            <span
              className="wheel"
              style={
                switchs
                  ? { backgroundColor: "#000" }
                  : { backgroundColor: "#fff" }
              }
            ></span>
          </span>
        </a>
      </div>
    </div>
  );
};

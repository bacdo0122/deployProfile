import { type } from "os";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { setDataFunc, setHeightFunc } from "../common";
import WorkItem from "./WorkItem";
import WorkType from "./WorkType";

type Props = {
  switchs: boolean;
};
const list_inline = {
  type: ["Everything", "Creative", "Art", "Design", "Branding"],
  data: [
    {
      id: 0,
      type: ["Creative", "Design"],
      title: "Guess App Walkthrough Screens",
      image: "https://jthemes.net/themes/html/bolby/demo/images/works/2.svg",
      icon: "fa-ellipsis-h",
    },
    {
      id: 1,
      type: ["Art"],
      title: "Project Managment Illustration",
      image: "https://jthemes.net/themes/html/bolby/demo/images/works/1.svg",
      icon: "fa-search-plus",
    },
    {
      id: 2,
      type: ["Branding"],
      title: "Delivery App Wireframe",
      image: "https://jthemes.net/themes/html/bolby/demo/images/works/3.svg",
      icon: "fa-video",
    },
    {
      id: 3,
      type: ["Creative"],
      title: "Onboarding Motivation",
      image: "https://jthemes.net/themes/html/bolby/demo/images/works/4.svg",
      icon: "fa-music",
    },
    {
      id: 4,
      type: ["Art", "Branding"],
      title: "iMac Mockup Design",
      image: "https://jthemes.net/themes/html/bolby/demo/images/works/5.svg",
      icon: "fa-image",
    },
    {
      id: 5,
      type: ["Creative", "Design"],
      title: "Game Store App Concept",
      image: "https://jthemes.net/themes/html/bolby/demo/images/works/6.svg",
      icon: "fa-link",
    },
    {
      id: 6,
      type: ["Art"],
      title: "Project Managment Illustration",
      image: "https://jthemes.net/themes/html/bolby/demo/images/works/4.svg",
      icon: "fa-search-plus",
    },
    {
      id: 7,
      type: ["Creative", "Design"],
      title: "Guest App Walkthrough Screens",
      image: "https://jthemes.net/themes/html/bolby/demo/images/works/1.svg",
      icon: "fa-ellipsis-h",
    },
    {
      id: 8,
      type: ["Branding"],
      title: "Delivery App Wireframe",
      image: "https://jthemes.net/themes/html/bolby/demo/images/works/2.svg",
      icon: "fa-video",
    },
  ],
};
const Work = (props: Props) => {
  const { switchs } = props;

  const [current, setCurrent] = useState<String>("Everything");
  const [height, setHeight] = useState<number>(654);
  const [data, setData] = useState<any>([]);
  const [load, setLoad] = useState<boolean>(false);


  const onLoad = ()=>{
    
    const turnOffLoad = setTimeout(() => {
      const getHeight = Array.from(
        document.querySelectorAll(".work_item")
      ).filter((item: any) => item.style.display === "block")[0];   
     
      const height = setHeightFunc(current, load, getHeight, setHeight, []); 
      setHeight(height);
      setDataFunc(current, load, setData, list_inline.data, []);
    }, 400);

    return () => clearTimeout(turnOffLoad);
  }

  useEffect(() => {
    const category = list_inline.data.filter((item: any) =>
      item.type.includes(current)
    );
    const getHeight = Array.from(
      document.querySelectorAll(".work_item")
    ).filter((item: any) => item.style.display === "block")[0];
    const height = setHeightFunc(current, load, getHeight, setHeight, category);
    setHeight(height);
    
    setDataFunc(current, load, setData, list_inline.data, category);
  }, [current, load]);

  return (
    <div className="About mt-4" id="Works">
      <h1
        className="About_title fadeInUp_animation"
        style={switchs ? { color: "#454360" } : { color: "#fff" }}
      >
        Recent works
      </h1>
      <div className="spacer"></div>
      <ul className="list-inline fadeInUp_animation">
        {list_inline.type.map((item: string, index: number) => {
          return (
            <WorkType
              title={item}
              key={index}
              current={current}
              setCurrent={setCurrent}
            />
          );
        })}
      </ul>
      <div className="list-inline-mobile">
        <select
          className="type-filter"
          onChange={(e) => {
            setCurrent(e.target.value);
          }}
        >
          {list_inline.type.map((item: string, index: number) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div
        className="work-wrapper mt-4"
        id="work"
        style={{
          height: `${height && height}px`,
        }}
      >
        {load
          ? list_inline.data.map((item: any, index: number) => {
              return (
                <WorkItem
                  {...item}
                  key={index}
                  current={current}
                  height={height}
                  data={data}
                  load={load}
                  setHeight={setHeight}
                  onLoad = {onLoad}
                />
              );
            })
          : list_inline.data
              .slice(0, (list_inline.data.length / 3) * 2)
              .map((item: any, index: number) => {
                return (
                  <WorkItem
                    {...item}
                    key={index}
                    current={current}
                    height={height}
                    data={data}
                    load={load}
                    setHeight={setHeight}
                    onLoad = {onLoad}
                  />
                );
              })}
      </div>
      {!load && (
        <div className="text-center">
          <button
            className="btn btn-default mt-4 mb-4"
            onClick={() => setLoad(true)}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
export default Work;

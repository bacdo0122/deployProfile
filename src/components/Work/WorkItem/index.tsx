import React, { useEffect, useRef, useState } from "react";
import { resizeWindow } from "../../common";
import { setHeightFunc } from "../../common";
type Props = {
  id: number;
  image: string;
  title: string;
  icon: string;
  type: String[];
  current: string;
  height: number;
  data: Array<Object>;
  load: boolean;
  setHeight: any;
  onLoad: ()=>void;
};

const WorkItem = (props: Props) => {
  const {
    id,
    image,
    title,
    icon,
    type,
    current,
    height,
    data,
    load,
    setHeight,
    onLoad
  } = props;
  const ref = useRef<any>(null);
  const [index, setIndex] = useState<number>(id);
  const [ready, setReady] = useState<boolean>(false);
  const [top, setTop] = useState<any>(null);
  const [left, setLeft] = useState<any>(null);
  useEffect(() => {
    if (current !== "Everything") {
      const cate = data.map((item: any) => item.id).indexOf(id);

      if (cate !== -1) {
        setIndex(cate);
      } else {
        setIndex(0);
      }
    } else setIndex(id);

    ref.current!.style.display = "block";
    ref.current!.addEventListener("transitionend", () => {
      if (type.includes(current) || current === "Everything") {
        ref.current!.style.display = "block";
      } else {
        ref.current!.style.display = "none";
      }
    });
    setReady(!ready);
  }, [current, data]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setTimeout(() => {
        const height_resize = setHeightFunc(
          current,
          load,
          ref.current,
          setHeight,
          []
        );
        setHeight(height_resize);
        resizeWindow(index, data, height_resize, setTop, setLeft);
      }, 400);
    });
  }, []);

  useEffect(() => {
    resizeWindow(index, data, height, setTop, setLeft);
  }, [ready]);
  return (
    <div
      ref={ref}
      onLoad={onLoad}
      className={`work_item `}
      style={{
        opacity: type.includes(current) || current === "Everything" ? "1" : "0",
        transform:
          type.includes(current) || current === "Everything"
            ? "scale(1)"
            : "scale(0.01)",
        top: top && top,
        left: left && left,
      }}
    >
      <div className="work_detail">
        <span className="work_detail_type">{type.toString()}</span>
        <h4 className="work_detail_title">{title}</h4>
        <span className="work_detail_icon">
          <i className={`fas ${icon}`}></i>
        </span>
      </div>
      <div className="work_bg">
        <img src={image} alt={title} />
        <div className="bg-wrapper"></div>
      </div>
    </div>
  );
};
export default WorkItem;

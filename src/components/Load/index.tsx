import React, { useEffect, useState } from "react";
import "./style.scss";
import { handleScroll } from "../common";
type Props = {};

const Load = (props: Props) => {
  const [load, setLoad] = useState<boolean>(false);
  useEffect(() => {
   
    const turnOffLoad = setTimeout(() => {
      setLoad(true);
    }, 1000);
    return () => clearTimeout(turnOffLoad);
  }, []);
 
  return (
    <div className="preload" style={load ? { display: "none" } : {}}>
      <div className="outer">
        <div className="infinityChrome">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="infinity">
          <div>
            <span></span>
          </div>
          <div>
            <span></span>
          </div>
          <div>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Load;



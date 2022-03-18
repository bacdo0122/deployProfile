import { useEffect, useState } from "react";
import {handleScroll} from '../common'
import { SlideNavItem } from "../SlideNavItem";

import "./style.scss";

interface Props {
  nav: boolean;
  t: any;
  switchs: boolean;
  setSwitchs: React.Dispatch<React.SetStateAction<boolean>>;
}


const SlideNavigation = (props: Props) => {
  const { nav, t, setSwitchs, switchs } = props;
  const [active, setActive] = useState("Home");
  useEffect(()=>{
    window.addEventListener("scroll", ()=>handleScroll(setActive));
  },[])
  return (
    <div
      className={nav ? `slide-nav active` : `slide-nav`}
      style={
        switchs
          ? {  color: "#000" }
          : {  color: "#F9F9FF" }
      }
    >
      <div className="slide-logo header__title">Bac</div>


      <ul className="slide-block">
        {t("data", { returnObjects: true }).map(
          (item: { text: string; icon: string }, index: number) => {
            return (
              <SlideNavItem
                icon={<i className={item.icon}></i>}
                text={item.text}
                key={index}
                switchs={switchs}
                active={active}
                setActive={setActive}
              />
            );
          }
        )}
      </ul>
      <div className="slide-bottom">© 2020 Bac Template.</div>
    </div>
  );
};
export default SlideNavigation;

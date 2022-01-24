import React, { useEffect, useRef, useState } from "react";
import './style.scss'
import {changeLanguage} from '../../locales/change'
interface Option {
  text: string;
  value: string;
}
interface Props {
  data: Option[];
}
const list_flag = [{value:"VI", class: "fas fa-flag-usa"},{value:"EN", class: "fas fa-flag-usa"}]
export const Select = (props: Props) => {
  const { data } = props;
  const ref = useRef<any>(null);
  const [status, setStatus] = useState(false);
  const [language, setLanguage] = useState<string>("");
  useEffect(()=>{
    if(ref.current && !status){
      ref.current.style.display = "none";
     
    }
    if(ref.current && status){
      ref.current.style.display = "flex";
   
    } 
  },[status])
  
  return (
    <div className="language-container" >
      <div className="language" onClick={()=>setStatus(!status)}>
      <i className="fas fa-flag-usa "></i>
      <span>{language && language}</span>
      </div>
      <div className="pop-up" ref={ref}>
      {list_flag.map((item,index)=>{
        return <div className="flag" key={index} onClick={()=>{
          setStatus(!status);
          setLanguage(item.value);
          changeLanguage(item.value.toLowerCase());
        }}>
          <i className={item.class}></i>
          <span>{item.value}</span>
        </div>
       
      })}
      </div>
    </div>
    
  );
};

import React from 'react'
import { Header } from '../Header'
import { Home } from '../Home';
import './style.scss';

interface Props {
    onClick: ()=> void,
    nav: boolean,
    t:any,
    switchs:boolean
}

export const Profile = (props: Props) => {
    const {onClick, nav, t, switchs} = props;
    return (
        <div className={nav ? `header__wrapper header__active` : "header__wrapper "} 
        style={
            switchs
              ? { backgroundColor: "#fff", color: "#000" }
              : { backgroundColor: "#353353", color: "#fff" }
          }
        >
            <Header onClick={onClick} switchs={switchs}/>
             <Home t = {t} switchs={switchs}/>
            
        </div>
    )
}

import React from 'react'
import { Header } from '../Header'
import { Home } from '../Home';
import About from '../About';
import './style.scss';
import Servers from '../Services';
import Experience from '../Experience';
import Work from '../Work';
import Plan from '../Plan';
import Review from '../Client&Review';
import Post from '../Posts';
import Form from '../Form';

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
       
        >
            <Header onClick={onClick} switchs={switchs}/>
             <Home t = {t} switchs={switchs}/>
            <About switchs={switchs}/>
            <Servers switchs={switchs} />
            <Experience switchs={switchs} />
            <Work switchs={switchs} />
            <Plan switchs={switchs} />
            <Review switchs={switchs} />
            <Post switchs={switchs} />
            <Form switchs={switchs} />
        </div>
    )
}

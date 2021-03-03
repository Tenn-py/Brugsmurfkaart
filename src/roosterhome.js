import React from 'react';
import './App.css';
import Tabladen from './tabladen.js';
import Image from './image'
import Weekrooster from './weekroosters'
import Klok from './klok';
import Over from './over page/over'
import Logo from './plattegronden/download.png'
import Meer from './meer page/meer'
import Login from './login/login'
import RoosterMakerTools from './roostermaker/roostermakertools'

function RoosterHome() {

  function Tcc() {
    console.log('going to other page')
    window.location.href = "https://www.twentscarmelcollege.nl"
  }

  return (
    <div>
      <div className="App">
        <Tabladen />
        <Image />
        <Weekrooster />
        <Klok />
        <Over />
        <Meer />
        <button className="LogoButton" onClick={Tcc}><img src={Logo} className="Logo" alt=""/></button>
      </div>
    </div>
    
  );
}

export default RoosterHome;
import React from 'react';
import './App.css';
import Logo from './plattegronden/download.png'
import Login from './login/login'

function Tabladen() {

    function Home() {
        console.log('going home')
    }

    function Meer() {
        console.log('going to meer')
    }

    function refreshPage() {
        window.location.reload(false);
    }

    function Tcc() {
        console.log('going to other page')
        window.location.href = "https://www.twentscarmelcollege.nl"
    }

    return (
        <div className="Tabladen">
            <button className="Refresh icon" onClick={refreshPage}><img className="icon" src="https://htmlacademy.ru/assets/icons/reload-6x-white.png"></img></button>
        </div>
    );
}

export default Tabladen;
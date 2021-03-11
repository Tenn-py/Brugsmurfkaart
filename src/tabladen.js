import React from 'react';
import './App.css';

function Tabladen() {


    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className="Tabladen">
            <button className="Refresh icon" onClick={refreshPage}><img alt="" className="icon" src="https://htmlacademy.ru/assets/icons/reload-6x-white.png"></img></button>
        </div>
    );
}

export default Tabladen;
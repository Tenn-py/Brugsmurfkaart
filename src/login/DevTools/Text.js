import React from 'react';
import './DevTools.css';

function Text() {

    function Somtoday() {
        window.location.href = "https://somtoday.nl/login?2"
    }

    function twentscarmelcollege() {
        window.location.href = "https://www.twentscarmelcollege.nl"
    }

    return(
        <div className="TextContainer">
            <h1>Extra links</h1>
            <button className="Somtoday" onClick={Somtoday}>
                Somtoday
            </button>
            <button className="Twentscarmelcollege" onClick={twentscarmelcollege}>
                Twentscarmelcollege
            </button>
        </div>
    )
    
}

export default Text;
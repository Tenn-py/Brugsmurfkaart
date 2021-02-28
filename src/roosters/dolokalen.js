import React from 'react';
import './rooster.css'

function Lokalen() {

    let lokalen = require('./roosters.json')

    return(
        <div className="Times">
            <div className="TimeText">
                <h1>klas</h1>
                <h3>{lokalen[3].lokalen[0]}</h3>
                <h3>{lokalen[3].lokalen[1]}</h3>
                <h3>{lokalen[3].lokalen[2]}</h3>
                <h3>{lokalen[3].lokalen[3]}</h3>
                <h3>{lokalen[3].lokalen[4]}</h3>
                <h3>{lokalen[3].lokalen[5]}</h3>
                <h3>{lokalen[3].lokalen[6]}</h3>
                <h3>{lokalen[3].lokalen[7]}</h3>
            </div>
        </div>
    );
}

export default Lokalen;
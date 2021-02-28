import React from 'react';
import Rooster from './vrooster';
import Times from './times';
import Lokalen from './vlokalen';
import './rooster.css';

function Vroostertime() {

    return(
        <div className="RoosterCard">
            <Times />
            <Rooster />
            <Lokalen />
        </div>
    );
}

export default Vroostertime;
import React from 'react';
import Rooster from './wrooster';
import Times from './times';
import Lokalen from './wlokalen';
import './rooster.css';

function Wroostertime() {

    return(
        <div className="RoosterCard">
            <Times />
            <Rooster />
            <Lokalen />
        </div>
    );
}

export default Wroostertime;
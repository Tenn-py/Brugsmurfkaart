import React from 'react';
import Drooster from './dorooster';
import Times from './times';
import Lokalen from './dolokalen';
import './rooster.css';

function Doroostertime() {
    return(
        <div className="RoosterCard">
            <Times />
            <Drooster />
            <Lokalen />
        </div>
    );
}

export default Doroostertime;
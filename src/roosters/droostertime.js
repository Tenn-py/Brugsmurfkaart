import React from 'react';
import Drooster from './drooster';
import Times from './times';
import Lokalen from './dlokalen';
import './rooster.css';

function Droostertime() {
    return(
        <div className="RoosterCard">
            <Times />
            <Drooster />
            <Lokalen />
        </div>
    );
}

export default Droostertime;
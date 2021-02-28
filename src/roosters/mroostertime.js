import React from 'react';
import Rooster from './mrooster';
import Times from './times';
import Lokalen from './mlokalen';
import './rooster.css';

function Mroostertime() {

    return(
        <div className="RoosterCard">
            <Times />
            <Rooster />
            <Lokalen />
        </div>
    );
}

export default Mroostertime;
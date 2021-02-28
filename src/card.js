import React from 'react';

function Card(Title, Body) {
    return (
        <div classname='card-container'>
            <div className="card-title">
                <h3>{Title}</h3>
            </div>
            <div className="card-body">
                <p>{Body}</p>
            </div>
        </div>
    )
}

export default Card;
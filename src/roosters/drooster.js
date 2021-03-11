import React, {useState, useEffect} from 'react'
import './rooster.css'

function Rooster(eerstem) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [vid1, setvid1] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/rooster/1")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setvid1(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
          )
      }, [])

    if (isLoaded) {
      return (
        <div className="card-container">
            <h1 className="Day">{vid1.name}</h1>
            <h4 className="RoosterTextff">{vid1.eerste}</h4>
            <h4 className="RoosterTextff">{vid1.tweede}</h4>
            <h4 className="RoosterTextff">{vid1.derde}</h4>
            <h4 className="RoosterTextff">{vid1.vierde}</h4>
            <h4 className="RoosterTextff">{vid1.vijfde}</h4>
            <h4 className="RoosterTextff">{vid1.zesde}</h4>
            <h4 className="RoosterTextff">{vid1.zevende}</h4>
            <h4 className="RoosterTextff">{vid1.achtste}</h4>
        </div>
      );
    }
    
}

export default Rooster;
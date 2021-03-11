import React, {useState, useEffect} from 'react'
import './creater.css'
import newMaandag from './newmaandag'

export default function Maandag() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [vid1, setvid1] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://127.0.0.1:5000/rooster/0")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setvid1(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(vid1)
    return (
      <div className="OldRooster">
        <div className="Day">
            <h4 className="Vak">{vid1.eerste}</h4>
            <h4 className="Vak">{vid1.tweede}</h4>
            <h4 className="Vak">{vid1.derde}</h4>
            <h4 className="Vak">{vid1.vierde}</h4>
            <h4 className="Vak">{vid1.vijfde}</h4>
            <h4 className="Vak">{vid1.zesde}</h4>
            <h4 className="Vak">{vid1.zevende}</h4>
            <h4 className="Vak">{vid1.achtste}</h4>
        </div>
      </div>
        
    );
  }
}

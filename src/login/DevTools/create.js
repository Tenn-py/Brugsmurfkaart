import React, {useState, useEffect} from 'react'
import './DevTools.css'
import Loading1 from './loading';

export default function Rooster() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [vid1, setvid1] = useState([]);
  const [PerUur, setPerUur] = useState([])
  const [whatchange, setwhatchange] = useState()
  const renders = ["<Loading1 />", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag"]

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    console.log(vid1)
    return (
      <div>
          <button>Maandag</button>
          <button>Dinsdag</button>
          <button>Woensdag</button>
          <button>Donderdag</button>
          <button>Vrijdag</button>
      </div>
    );
  }
  
}
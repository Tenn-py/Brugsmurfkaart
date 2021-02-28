import React, {useState, useEffect} from 'react'

export default function Loading1() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [vid1, setvid1] = useState([]);

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

      return (
          <div>
              <p>{vid1.rooster}</p>
          </div>
      )
}
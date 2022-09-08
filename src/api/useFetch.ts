import {useEffect, useState} from 'react';
import axios from 'axios';

// const url = 'http://localhost:3001'

function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(url).then((response) => {
            setData(response.data);
        })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false);
        });
    }, [url]);
   
    

    return { data, loading, error };
}

export default useFetch;

// in app.ts
// const { data: joke, loading, error, refetch } = useFetch('https://v2.jokeapi.dev/joke/Any');
//
// if(loading)
//      return <h1> Loading...</h1>
//
// if(error)
//      console.log(error)
//
// return(
// <h1>
//  {joke?.setup} answer: {joke?.delivery}
// </h1>
//
//  <button onClick={refetch}>
// )

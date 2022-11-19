import { useState, useEffect } from 'react';
import axios from 'axios';


const UseAPISpotify = () => {
    const [data, setData] = useState('')
    const URL = 'https://jsonplaceholder.typicode.com/photos';

    function FetchDataFromAPI() {
        axios
            .get(URL)
            .then(res => {
                setData(res.data)
            })

    }

    useEffect(() => {
        FetchDataFromAPI();
    }, []);

    return { data }
}

export default UseAPISpotify;
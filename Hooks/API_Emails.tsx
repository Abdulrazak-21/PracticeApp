import { useState, useEffect } from 'react';
import axios from 'axios';


const UseAPIEmails = () => {
    const [data1, setData] = useState('')
    const [isloading, setisLoding] = useState(false)
    const [error, setError] = useState('')
    const URL = 'https://jsonplaceholder.typicode.com/posts';

    function FetchDataFromAPI() {
        setisLoding(true)
        axios
            .get(URL)
            .then(res => {
                setData(res.data)
                setisLoding(false)
            })
            .catch(e => {
                setisLoding(false);
                setError(e);
            });
    }

    useEffect(() => {
        FetchDataFromAPI();
    }, []);

    return { data1, isloading, error }
}

export default UseAPIEmails;
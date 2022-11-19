import { useState, useEffect } from 'react';
import axios from 'axios';


const UseAPIEmails = () => {
    const [data1, setData] = useState('')
    const [isloading, setisLoding] = useState(false)
    const [error, setError] = useState('')
    const URL_EMAILS = 'https://jsonplaceholder.typicode.com/posts';
    const URL_PHOTOS = 'https://jsonplaceholder.typicode.com/photos'

    function FetchDataFromAPI() {
        setisLoding(true)
        axios
            .get(URL_EMAILS)
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
import { useState, useEffect } from 'react';
import axios from 'axios';

const UseAPIAirlines = () => {

    const [data, setData] = useState('')
    const [isloding, setIsloding] = useState(false)
    const [error, setError] = useState('')
    const URL = 'https://api.instantwebtools.net/v1/airlines'

    function getDataFromAPI() {
        setIsloding(true)
        axios
            .get(URL)
            .then(res => {
                setData(res.data)
                setIsloding(false)
                //console.log(res.data)
            })
            .catch(e => {
                setError(e)
                setIsloding(false)
            })
    }

    useEffect(() => {
        getDataFromAPI();
    }, []);

    return { data, isloding, error }

}

export default UseAPIAirlines;